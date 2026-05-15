import { Position } from 'reactflow';
import BaseNode from './BaseNode';

export const ContextNode = ({ id, data }) => (
  <BaseNode
    id={id}
    title="Knowledge Base"
    icon="◎"
    color="#14B8A6"
    width={250}
    fields={[
      {
        key: 'sourceType',
        label: 'Source Type',
        type: 'select',
        defaultValue: data?.sourceType || 'PDF',
        options: [
          { name: 'PDF', value: 'PDF' },
          { name: 'Website', value: 'Website' },
          { name: 'Vector DB', value: 'Vector DB' },
        ],
      },
      {
        key: 'contextName',
        label: 'Context Name',
        defaultValue: data?.contextName || 'Company Docs',
      },
    ]}
    handles={[
      { type: 'source', position: Position.Right, id: 'context', label: 'ctx' },
    ]}
  />
);
