import { Position } from "reactflow";
import BaseNode from "./BaseNode";

export const AgentNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="AI Agent"
      width={280}
      height={320}
      fields={[
        {
          key: "agentType",
          label: "Agent Type",
          type: "select",
          defaultValue: data?.agentType || "ReAct",
          options: [
            { name: "ReAct", value: "ReAct" },
            { name: "Function Calling", value: "Function Calling" },
            { name: "Planner", value: "Planner" },
          ],
        },
        {
          key: "model",
          label: "Model",
          type: "select",
          defaultValue: data?.model || "GPT-4",
          options: [
            { name: "GPT-4", value: "GPT-4" },
            { name: "Claude", value: "Claude" },
            { name: "Gemini", value: "Gemini" },
            { name: "Llama", value: "Llama" },
          ],
        },
        {
          key: "temperature",
          label: "Temperature",
          type: "number",
          defaultValue: data?.temperature || 0.7,
        },
        {
          key: "maxIterations",
          label: "Max Iterations",
          type: "number",
          defaultValue: data?.maxIterations || 5,
        },
      ]}
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: "prompt",
          style: {
            top: "25%",
          },
        },
        {
          type: "target",
          position: Position.Left,
          id: "tools",
          style: {
            top: "55%",
          },
        },
        {
          type: "source",
          position: Position.Right,
          id: "response",
        },
      ]}
    />
  );
};
