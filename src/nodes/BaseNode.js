import { useState } from "react";
import { Handle } from "reactflow";

const BaseNode = ({
  id,
  title,
  icon,
  color = "#6366F1",
  fields = [],
  handles = [],
  children,
  width = 220,
  autoResize = false,
}) => {
  const [values, setValues] = useState(() => {
    const initialValues = {};
    fields.forEach((field) => {
      initialValues[field.key] = field.defaultValue || "";
    });
    return initialValues;
  });

  const [dynamicHandles, setDynamicHandles] = useState(() => {
    let initial = [];
    fields.forEach((field) => {
      if (field.generateHandles)
        initial = [...initial, ...field.generateHandles(field.defaultValue || "")];
    });
    return initial;
  });

  const handleChange = (field, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [field.key]: value,
    }));
    if (field.generateHandles)
      setDynamicHandles(field.generateHandles(value));
  };

  const allHandles = [...handles, ...dynamicHandles];

  // Width resize based on text length
  const dynamicWidth =
    autoResize && values.text
      ? Math.min(Math.max(values.text.length * 8 + 120, 220), 500)
      : width;

  // Dynamic rows calculation
  const getRows = (text = "") => {
    const lines = text.split("\n");

    let rows = 1;

    lines.forEach((line) => {
      // Approx chars per line before wrap
      rows += Math.floor(line.length / 60);
    });

    return Math.min(Math.max(rows, 1), 12);
  };

  return (
    <div
      className="node-card"
      style={{ width: dynamicWidth, transition: "width 0.15s ease" }}
    >
      {/* Handles */}
      {allHandles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={{
            background: color,
            border: "2px solid white",
            width: 10,
            height: 10,
            boxShadow: "0 0 0 1px rgba(0,0,0,0.15)",
            ...handle.style,
          }}
        />
      ))}

      {/* title */}
      <div className="node-header" style={{ background: color }}>
        {icon && <span className="node-header-icon">{icon}</span>}
        <span>{title}</span>
      </div>

      <div className="node-body">
        {/* custom content */}
        {children}

        {/* fields */}
        {fields.map((field) => (
          <div key={field.key} className="node-field">
            <span className="node-field-label">{field.label}</span>
            {field.type === "select" ? (
              <select
                value={values[field.key]}
                onChange={(e) => handleChange(field, e.target.value)}
              >
                {field.options?.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.name}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                value={values[field.key]}
                rows={getRows(values[field.key])}
                onChange={(e) => handleChange(field, e.target.value)}
              />
            ) : (
              <input
                type={field.type || "text"}
                value={values[field.key]}
                onChange={(e) => handleChange(field, e.target.value)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BaseNode;
