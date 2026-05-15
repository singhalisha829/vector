import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">VectorShift</div>
        </div>
        <PipelineToolbar />
        <SubmitButton />
      </div>
      <PipelineUI />
    </div>
  );
}

export default App;
