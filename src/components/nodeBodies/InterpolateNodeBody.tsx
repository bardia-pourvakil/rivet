import { FC, useLayoutEffect, useMemo, useRef } from 'react';
import { InterpolateNode } from '../../model/nodes/InterpolateNode';
import styled from '@emotion/styled';
import { monaco } from '../../utils/monaco';
import { lastRunData } from '../../state/dataFlow';
import { useRecoilValue } from 'recoil';
import { PortId } from '../../model/NodeBase';
import { RenderDataValue } from '../RenderDataValue';

export type InterpolateNodeBodyProps = {
  node: InterpolateNode;
};

const Body = styled.div`
  font-size: 12px;
`;

export const InterpolateNodeBody: FC<InterpolateNodeBodyProps> = ({ node }) => {
  const bodyRef = useRef<HTMLDivElement>(null);

  const truncated = useMemo(
    () =>
      node.data.text
        .split('\n')
        .slice(0, 15)
        .map((line) => {
          const words = line.split(' ');
          if (words.length > 50) {
            return words.slice(0, 50).join(' ') + '...';
          }
          return line;
        })
        .join('\n')
        .trim(),
    [node.data.text],
  );

  useLayoutEffect(() => {
    monaco.editor.colorizeElement(bodyRef.current!, {
      theme: 'prompt-interpolation',
    });
  }, [truncated]);

  return (
    <Body>
      <div ref={bodyRef} data-lang="prompt-interpolation">
        {truncated}
      </div>
    </Body>
  );
};

export const InterpolateNodeOutput: FC<InterpolateNodeBodyProps> = ({ node }) => {
  const output = useRecoilValue(lastRunData(node.id));

  if (!output) {
    return null;
  }

  if (output.status?.status === 'error') {
    return <div>Error: {output.status.error}</div>;
  }

  if (!output.outputData) {
    return null;
  }

  const outputText = output.outputData['output' as PortId];
  return (
    <pre>
      <RenderDataValue value={outputText} />
    </pre>
  );
};