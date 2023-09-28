import { nanoid } from 'nanoid/non-secure';
import { dedent } from 'ts-dedent';
import {
  type AnyDataValue,
  type ChartNode,
  type EditorDefinition,
  type Inputs,
  type InternalProcessContext,
  type NodeId,
  type NodeInputDefinition,
  type NodeOutputDefinition,
  type NodeUIData,
  type Outputs,
  type PortId,
  type StringArrayDataValue,
  type StringDataValue,
  type ObjectDataValue,
  type ArrayDataValue,
  type PluginNodeImpl,
} from '../../index.js';
import {
  type LemurNodeData,
  type LemurParams,
  getApiKey,
  getLemurParams,
  lemurEditorDefinitions,
  lemurTranscriptIdsInputDefinition,
} from './lemurHelpers.js';
import { coerceType } from '../../utils/coerceType.js';
import { pluginNodeDefinition } from '../../model/NodeDefinition.js';

export type LemurQaNode = ChartNode<'assemblyAiLemurQa', LemurQaNodeData>;

export type LemurQaNodeData = LemurNodeData & {
  questions_answer_format?: string;
  questions_context?: string;
  questions_answer_options?: string;
};

export const LemurQaNodeImpl = {
  create(): LemurQaNode {
    const chartNode: LemurQaNode = {
      type: 'assemblyAiLemurQa',
      title: 'LeMUR Question & Answers',
      id: nanoid() as NodeId,
      visualData: {
        x: 0,
        y: 0,
        width: 250,
      },
      data: {
        final_model: 'default',
      },
    };

    return chartNode;
  },

  getInputDefinitions(): NodeInputDefinition[] {
    return [
      lemurTranscriptIdsInputDefinition,
      {
        id: 'questions' as PortId,
        dataType: ['string', 'string[]', 'object', 'object[]', 'any', 'any[]'],
        title: 'Questions',
      },
      {
        id: 'context' as PortId,
        dataType: 'string',
        title: 'Context',
      },
    ];
  },

  getOutputDefinitions(): NodeOutputDefinition[] {
    return [
      {
        dataType: 'object[]',
        id: 'response' as PortId,
        title: 'Response',
      },
    ];
  },

  getEditors(): EditorDefinition<LemurQaNode>[] {
    return [
      {
        type: 'string',
        label: 'Context',
        dataKey: 'context',
      },
      ...(lemurEditorDefinitions as unknown as EditorDefinition<LemurQaNode>[]),
      {
        type: 'string',
        label: 'Questions Answer Format',
        dataKey: 'questions_answer_format',
      },
      {
        type: 'string',
        label: 'Questions Context',
        dataKey: 'questions_context',
      },
      {
        type: 'string',
        label: 'Questions Answer Options',
        dataKey: 'questions_answer_options',
      },
    ];
  },

  getBody(): string | undefined {
    return '';
  },

  getUIData(): NodeUIData {
    return {
      infoBoxBody: dedent`Use AssemblyAI LeMUR to ask questions about transcripts`,
      infoBoxTitle: 'Use AssemblyAI LeMUR Question & Answer',
      contextMenuTitle: 'LeMUR Q&A',
      group: ['AI', 'AssemblyAI'],
    };
  },

  async process(data, inputs: Inputs, context: InternalProcessContext): Promise<Outputs> {
    const apiKey = getApiKey(context);

    const questions = getQuestions(inputs).map((question) => applyQuestionEditors(data, question));

    const params: LemurParams & {
      questions: Question[];
    } = {
      questions,
      ...getLemurParams(inputs, data),
    };

    const { response } = await runLemurQa(apiKey, params);
    return {
      ['response' as PortId]: {
        type: 'object[]',
        value: response,
      },
    };
  },
} satisfies PluginNodeImpl<LemurQaNode>;

function getQuestions(inputs: Inputs): Question[] {
  const input = inputs['questions' as PortId] as
    | StringDataValue
    | StringArrayDataValue
    | AnyDataValue
    | ObjectDataValue
    | ArrayDataValue<ObjectDataValue>
    | ArrayDataValue<AnyDataValue>;

  if (!input) throw new Error('Questions are required.');

  if (input.type === 'string') {
    return [
      {
        question: coerceType(input, 'string'),
      },
    ];
  } else if (input.type === 'string[]') {
    return coerceType(input, 'string[]').map((question) => ({ question }));
  } else if (input.type === 'object') {
    return [coerceType(input, 'object')] as Question[];
  } else if (input.type === 'object[]') {
    return coerceType(input, 'object[]') as unknown as Question[];
  } else if (input.type === 'any' && typeof input.value === 'string') {
    return [
      {
        question: coerceType(input, 'string'),
      },
    ];
  } else if ((input.type === 'any' && Array.isArray(input.value)) || input.type === 'any[]') {
    return (input.value as any[]).map<Question>((question: any) => {
      if (typeof question === 'string') {
        return { question };
      } else if (typeof question === 'object') {
        return question as Question;
      } else {
        throw new Error('Question must be a string or object.');
      }
    });
  }
  throw new Error('Questions must be a string, string[], a question object, or an array of question objects.');
}

function applyQuestionEditors(data: LemurQaNodeData, question: Question): Question {
  if (!('answer_format' in question) && data.questions_answer_format) {
    question.answer_format = data.questions_answer_format;
  }
  if (!('answer_options' in question) && data.questions_answer_options) {
    question.answer_options = data.questions_answer_options.split(';');
  }
  if (!('context' in question) && data.questions_context) {
    question.context = data.questions_context;
  }

  return question;
}

async function runLemurQa(apiToken: string, params: object) {
  const response = await fetch('https://api.assemblyai.com/lemur/v3/generate/question-answer', {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      authorization: apiToken,
    },
  });
  const body = await response.json();
  if (response.status !== 200) {
    if ('error' in body) throw new Error(body.error);
    throw new Error(`LeMUR QA failed with status ${response.status}`);
  }

  return body as { response: QuestionAnswer[] };
}

type Question = {
  question: string;
  context?: string;
  answer_format?: string;
  answer_options?: string[];
};
type QuestionAnswer = {
  question: string;
  answer: string;
};

export const lemurQaNode = pluginNodeDefinition(LemurQaNodeImpl, 'LeMUR Q&A');
