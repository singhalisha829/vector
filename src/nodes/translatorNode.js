import { Position } from "reactflow";
import BaseNode from "./BaseNode";

export const TranslatorNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Translator"
      width={260}
      height={100}
      fields={[
        {
          key: "sourceLanguage",
          label: "Source Language",
          type: "select",
          defaultValue: data?.sourceLanguage || "Auto Detect",
          options: [
            { name: "Auto Detect", value: "Auto Detect" },
            { name: "English", value: "English" },
            { name: "Hindi", value: "Hindi" },
            { name: "Spanish", value: "Spanish" },
            { name: "French", value: "French" },
            { name: "German", value: "German" },
            { name: "Japanese", value: "Japanese" },
            { name: "Chinese", value: "Chinese" },
          ],
        },
        {
          key: "targetLanguage",
          label: "Target Language",
          type: "select",
          defaultValue: data?.targetLanguage || "English",
          options: [
            { name: "English", value: "English" },
            { name: "Hindi", value: "Hindi" },
            { name: "Spanish", value: "Spanish" },
            { name: "French", value: "French" },
            { name: "German", value: "German" },
            { name: "Japanese", value: "Japanese" },
            { name: "Chinese", value: "Chinese" },
          ],
        },
      ]}
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: "text",
        },
        {
          type: "source",
          position: Position.Right,
          id: "translated",
        },
      ]}
    />
  );
};
