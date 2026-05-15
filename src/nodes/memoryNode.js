import { Position } from "reactflow";
import BaseNode from "./BaseNode";

export const MemoryNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Memory"
      width={240}
      height={100}
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
        {
          type: "target",
          position: Position.Left,
          id: "input",
        },
        {
          type: "source",
          position: Position.Right,
          id: "memory",
        },
      ]}
    />
  );
};
