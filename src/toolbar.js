// toolbar.js

import { DraggableNode } from "./draggableNode";

const NODE_CONFIG = [
  { type: "customInput",  label: "Input",          icon: "→",  color: "#10B981" },
  { type: "customOutput", label: "Output",         icon: "←",  color: "#3B82F6" },
  { type: "text",         label: "Text",           icon: "T",  color: "#F59E0B" },
  { type: "llm",          label: "LLM",            icon: "⬡",  color: "#8B5CF6" },
  { type: "prompt",       label: "Prompt",         icon: "✎",  color: "#EC4899" },
  { type: "memory",       label: "Memory",         icon: "◈",  color: "#06B6D4" },
  { type: "context",      label: "Knowledge Base", icon: "◎",  color: "#14B8A6" },
  { type: "translator",   label: "Translator",     icon: "⇄",  color: "#6366F1" },
  { type: "agent",        label: "AI Agent",       icon: "◆",  color: "#EF4444" },
];

export const PipelineToolbar = () => {
  return (
    <div className="sidebar-nodes">
      <div className="sidebar-section-label">Nodes</div>
      {NODE_CONFIG.map((node) => (
        <DraggableNode
          key={node.type}
          type={node.type}
          label={node.label}
          icon={node.icon}
          color={node.color}
        />
      ))}
    </div>
  );
};
