import { Position } from "reactflow";
import BaseNode from "./BaseNode";

export const MemoryNode = ({ id, data }) => (
  <BaseNode
    id={id}
    title="Memory"
    icon="◈"
    color="#06B6D4"
    width={240}
    fields={[
      {
        key: "memoryType",
        label: "Memory Type",
        type: "select",
        defaultValue: data?.memoryType || "Short-term",
        options: [
          { name: "Short-term", value: "Short-term" },
          { name: "Persistent", value: "Persistent" },
        ],
      },
      {
        key: "windowSize",
        label: "Window Size",
        type: "number",
        defaultValue: data?.windowSize || 5,
      },
    ]}
    handles={[
      { type: "target", position: Position.Left, id: "input", label: "in" },
      { type: "source", position: Position.Right, id: "memory", label: "out" },
    ]}
  />
);
