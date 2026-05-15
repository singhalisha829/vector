import { Position } from "reactflow";
import BaseNode from "./BaseNode";

export const PromptNode = ({ id, data }) => (
  <BaseNode
    id={id}
    title="Prompt"
    icon="✎"
    color="#EC4899"
    width={260}
    fields={[
      {
        key: "template",
        label: "Prompt Template",
        type: "textarea",
        defaultValue: data?.template || "",
      },
    ]}
    handles={[
      {
        type: "target",
        position: Position.Left,
        id: "variables",
        label: "vars",
      },
      { type: "source", position: Position.Right, id: "prompt", label: "out" },
    ]}
  />
);
