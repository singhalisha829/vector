// textNode.js
import { Position } from 'reactflow';
import BaseNode from './BaseNode';

export const TextNode = ({ id, data }) => (
  <BaseNode
    id={id}
    title="Text"
    icon="T"
    color="#F59E0B"
    fields={[
      {
        key: 'text',
        label: 'Text',
        type: 'textarea',
        defaultValue: data?.text || '{{input}}',
      },
    ]}
    handles={[{ type: 'source', position: Position.Right, id: 'output' }]}
  />
);
