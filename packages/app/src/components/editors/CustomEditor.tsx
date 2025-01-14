import { type CustomEditorDefinition, type ChartNode } from '@ironclad/rivet-core';
import { type FC } from 'react';
import { type SharedEditorProps } from './SharedEditorProps';
import { match } from 'ts-pattern';
import { CodeNodeAIAssistEditor } from './custom/CodeNodeAIAssistEditor';

export const CustomEditor: FC<
  SharedEditorProps & {
    editor: CustomEditorDefinition<ChartNode>;
  }
> = ({ editor, ...props }) => {
  return match(editor.customEditorId)
    .with('CodeNodeAIAssist', () => <CodeNodeAIAssistEditor {...props} editor={editor} />)
    .otherwise(() => null);
};
