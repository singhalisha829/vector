// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="prompt" label="Prompt" />
        <DraggableNode type="memory" label="Memory" />
        <DraggableNode type="context" label="Knowledge Base" />
        <DraggableNode type="translator" label="Translator" />
        <DraggableNode type="agent" label="AI Agent" />
      </div>
    </div>
  );
};
