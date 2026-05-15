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
}) => {
  const [values, setValues] = useState(() => {
    const initialValues = {};
    fields.forEach((field) => {
      initialValues[field.key] = field.defaultValue || "";
    });
    return initialValues;
  });

  const handleChange = (fieldName, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  return (
    <div className="node-card" style={{ width }}>
      {/* Handles */}
      {handles.map((handle) => (
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
                onChange={(e) => handleChange(field.key, e.target.value)}
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
                onChange={(e) => handleChange(field.key, e.target.value)}
              />
            ) : (
              <input
                type={field.type || "text"}
                value={values[field.key]}
                onChange={(e) => handleChange(field.key, e.target.value)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BaseNode;
