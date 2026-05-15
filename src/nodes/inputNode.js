// inputNode.js
import { Position } from 'reactflow';
import BaseNode from './BaseNode';

export const InputNode = ({ id, data }) => (
  <BaseNode
    id={id}
    title="Input"
    icon="→"
    color="#10B981"
    fields={[
      {
        key: 'name',
        label: 'Name',
        defaultValue: data?.inputName || id.replace('customInput-', 'input_'),
      },
      {
        key: 'type',
        label: 'Type',
        type: 'select',
        defaultValue: data?.inputType || 'Text',
        options: [
          { name: 'Text', value: 'Text' },
          { name: 'File', value: 'File' },
        ],
      },
    ]}
    handles={[{ type: 'source', position: Position.Right, id: 'value' }]}
  />
);
