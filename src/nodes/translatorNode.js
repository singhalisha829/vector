import { Position } from 'reactflow';
import BaseNode from './BaseNode';

const LANGUAGES = [
  { name: 'Auto Detect', value: 'Auto Detect' },
  { name: 'English',     value: 'English' },
  { name: 'Hindi',       value: 'Hindi' },
  { name: 'Spanish',     value: 'Spanish' },
  { name: 'French',      value: 'French' },
  { name: 'German',      value: 'German' },
  { name: 'Japanese',    value: 'Japanese' },
  { name: 'Chinese',     value: 'Chinese' },
];

export const TranslatorNode = ({ id, data }) => (
  <BaseNode
    id={id}
    title="Translator"
    icon="⇄"
    color="#6366F1"
    width={260}
    fields={[
      {
        key: 'sourceLanguage',
        label: 'Source Language',
        type: 'select',
        defaultValue: data?.sourceLanguage || 'Auto Detect',
        options: LANGUAGES,
      },
      {
        key: 'targetLanguage',
        label: 'Target Language',
        type: 'select',
        defaultValue: data?.targetLanguage || 'English',
        options: LANGUAGES.filter((l) => l.value !== 'Auto Detect'),
      },
    ]}
    handles={[
      { type: 'target', position: Position.Left,  id: 'text',       label: 'text' },
      { type: 'source', position: Position.Right, id: 'translated', label: 'out'  },
    ]}
  />
);
