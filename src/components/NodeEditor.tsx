import { FC, useEffect } from 'react';
import { selectedNodeState } from '../state/graphBuilder';
import { useRecoilState, useRecoilValue } from 'recoil';
import { nodesSelector } from '../state/graph';
import { ChartNode } from '../model/NodeBase';
import styled from '@emotion/styled';
import { ReactComponent as MultiplyIcon } from 'majesticons/line/multiply-line.svg';
import { NodeType, nodeDisplayName } from '../model/Nodes';
import { match } from 'ts-pattern';
import { PromptNodeEditor } from './nodeEditors/PromptNodeEditor';
import produce from 'immer';

export const NodeEditorRenderer: FC = () => {
  const nodes = useRecoilValue(nodesSelector);
  const selectedNodeId = useRecoilValue(selectedNodeState);

  const selectedNode = nodes.find((node) => node.id === selectedNodeId);

  if (!selectedNodeId || !selectedNode) {
    return null;
  }

  return <NodeEditor selectedNode={selectedNode} />;
};

type NodeEditorProps = { selectedNode: ChartNode<string, unknown> };

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 45%;
  min-width: 500px;
  max-width: 1000px;
  height: 100%;
  padding: 20px;
  background-color: var(--grey-darker);
  border-left: 2px solid var(--grey);
  color: var(--body-text);
  font-family: 'Roboto Mono', monospace;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 24px;
    margin: 0;
  }

  h3 {
    font-size: 20px;
    margin: 0;
  }

  .close-button {
    position: absolute;
    right: 20px;
    top: 20px;
    background-color: var(--primary);
    border: none;
    color: var(--grey-dark);
    cursor: pointer;
    font-size: 20px;
    padding: 5px 10px;
    border: 2px solid var(--grey-dark);
    font-size: 14px;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .section-title {
    color: var(--foreground-bright);
    font-size: 20px;
    margin-bottom: 10px;
  }

  .node-name {
    background-color: var(--grey-dark);
    border: 2px solid var(--grey);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: var(--foreground);
    font-size: 18px;
    padding: 5px 10px;
    resize: none;
    width: 100%;
  }

  .description-field {
    background-color: var(--grey-dark);
    border: 2px solid var(--grey);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: var(--foreground);
    min-height: 50px;
    padding: 10px;
    resize: none;
    width: 100%;
  }

  .input-field {
    font-family: 'Roboto Mono', monospace;
    font-size: 14px;
  }

  .input-field:focus {
    outline: none;
    border-color: var(--primary);
  }

  .section-node {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .section-node-content {
    flex-grow: 1;
    position: relative;
  }
`;

export const NodeEditor: FC<NodeEditorProps> = () => {
  const [nodes, setNodes] = useRecoilState(nodesSelector);
  const [selectedNodeId, setSelectedNodeId] = useRecoilState(selectedNodeState)!;

  const selectedNode = nodes.find((node) => node.id === selectedNodeId)!;

  const updateNode = (node: ChartNode<string, unknown>) => {
    setNodes((nodes) =>
      produce(nodes, (draft) => {
        const index = draft.findIndex((n) => n.id === node.id);
        draft[index] = node;
      }),
    );
  };

  const nodeEditor = match(selectedNode)
    .with({ type: 'prompt' }, (node) => <PromptNodeEditor node={node} onChange={(node) => updateNode(node)} />)
    .otherwise(() => <div>Unknown node type</div>);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedNodeId(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setSelectedNodeId]);

  return (
    <Container>
      <button className="close-button" onClick={() => setSelectedNodeId(null)}>
        <MultiplyIcon />
      </button>
      <div className="section">
        <h3 className="section-title">Node Info</h3>
        <input
          type="text"
          className="node-name input-field"
          placeholder="Enter a name for the node..."
          value={selectedNode.title}
        />
      </div>
      <div className="section">
        <textarea
          className="description-field input-field"
          placeholder="Enter any description or notes for this node..."
        ></textarea>
      </div>
      <div className="section section-node">
        <h3 className="section-title">{nodeDisplayName[selectedNode.type as NodeType]}</h3>
        <div className="section-node-content">{nodeEditor}</div>
      </div>
    </Container>
  );
};