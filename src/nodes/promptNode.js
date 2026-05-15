import { Position } from "reactflow";
import BaseNode from "./BaseNode";

export const PromptNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Prompt"
      width={260}
      height={160}
      fields={[
        {
          key: "template",
          label: "Prompt",
          type: "textarea",
          defaultValue: data?.template || id.replace("-", "_"),
        },
      ]}
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: "variables",
        },
        {
          type: "source",
          position: Position.Right,
          id: "prompt",
        },
      ]}
    />
  );
};
