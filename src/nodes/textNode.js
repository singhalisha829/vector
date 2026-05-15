// textNode.js

import { Position } from "reactflow";
import BaseNode from "./BaseNode";

export const TextNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Text"
      fields={[
        {
          key: "text",
          label: "Text",
          defaultValue: data?.text || "{{input}}",
          type: "text",
        },
      ]}
      handles={[
        {
          type: "source",
          position: Position.Right,
          id: "output",
        },
      ]}
    />
  );
};
