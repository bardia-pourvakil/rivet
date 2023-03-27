import { NodeImpl } from '../NodeImpl';
import { ChartNode, NodeId, NodeInputDefinition, NodeOutputDefinition, NodeOutputId } from '../NodeBase';
import { nanoid } from 'nanoid';
import { DataType } from '../DataValue';

export type UserInputNode = ChartNode<'userInput', UserInputNodeData>;

export type UserInputNodeData = {
  prompt: string;
};

export class UserInputNodeImpl extends NodeImpl<UserInputNode> {
  static create(prompt = '', inputType: DataType = 'string'): UserInputNode {
    const inputDefinitions: NodeInputDefinition[] = [];
    const outputDefinitions: NodeOutputDefinition[] = [
      {
        dataType: inputType,
        id: 'output' as NodeOutputId,
        title: 'User Input',
      },
    ];

    const chartNode: UserInputNode = {
      type: 'userInput',
      title: 'User Input',
      id: nanoid() as NodeId,
      visualData: {
        x: 0,
        y: 0,
      },
      data: {
        prompt,
      },
      inputDefinitions,
      outputDefinitions,
    };

    return chartNode;
  }

  async getUserInput(): Promise<Record<string, any>> {
    const input = prompt(this.chartNode.data.prompt);
    return {
      output: input,
    };
  }

  async process(inputs: Record<string, any>): Promise<Record<string, any>> {
    return this.getUserInput();
  }
}