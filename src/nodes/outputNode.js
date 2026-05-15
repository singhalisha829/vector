// outputNode.js
import { Position } from 'reactflow';
import BaseNode from './BaseNode';

export const OutputNode = ({ id, data }) => (
  <BaseNode
    id={id}
    title="Output"
    icon="←"
    color="#3B82F6"
    fields={[
      {
        key: 'name',
        label: 'Name',
        defaultValue: data?.outputName || id.replace('customOutput-', 'output_'),
      },
      {
        key: 'type',
        label: 'Type',
        type: 'select',
        defaultValue: data?.outputType || 'Text',
        options: [
          { name: 'Text', value: 'Text' },
          { name: 'Image', value: 'File' },
        ],
      },
    ]}
    handles={[{ type: 'target', position: Position.Left, id: 'value' }]}
  />
);
