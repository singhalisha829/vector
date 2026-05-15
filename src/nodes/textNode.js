// textNode.js
import { Position } from "reactflow";
import BaseNode from "./BaseNode";

const extractVariableHandles = (value) => {
  const vars = [
    ...new Set(
      [...value.matchAll(/\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g)].map(
        (m) => m[1]
      )
    ),
  ];
  return vars.map((v, i) => ({
    type: "target",
    position: Position.Left,
    id: v,
    style: { top: `${60 + i * 30}px` },
  }));
};

export const TextNode = ({ id, data }) => (
  <BaseNode
    id={id}
    title="Text"
    icon="T"
    color="#F59E0B"
    autoResize
    fields={[
      {
        key: "text",
        label: "Text",
        type: "textarea",
        defaultValue: data?.text || "{{input}}",
        generateHandles: extractVariableHandles,
      },
    ]}
    handles={[{ type: "source", position: Position.Right, id: "output" }]}
  />
);
