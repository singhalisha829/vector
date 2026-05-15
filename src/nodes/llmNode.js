// llmNode.js
import { Position } from "reactflow";
import BaseNode from "./BaseNode";

export const LLMNode = ({ id }) => (
  <BaseNode
    id={id}
    title="LLM"
    icon="⬡"
    color="#8B5CF6"
    width={240}
    handles={[
      {
        type: "target",
        position: Position.Left,
        id: "system",
        label: "system",
        style: { top: "33%" },
      },
      {
        type: "target",
        position: Position.Left,
        id: "prompt",
        label: "prompt",
        style: { top: "66%" },
      },
      {
        type: "source",
        position: Position.Right,
        id: "response",
        label: "response",
      },
    ]}
  >
    <span>This is a LLM.</span>
  </BaseNode>
);
