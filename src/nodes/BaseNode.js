import { useState } from "react";
import { Handle } from "reactflow";

const BaseNode = ({
  id,
  title,
  fields = [],
  handles = [],
  children,
  width = 200,
  height = 80,
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
    <div style={{ width: width, minHeight: height, border: "1px solid black" }}>
      {/* Handles */}
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}

      {/* Title */}
      <div>
        <span>{title}</span>
      </div>

      {/* Custom Content */}
      {children}

      {/* Fields */}
      {fields.length > 0 && (
        <div>
          {fields.map((field) => (
            <label key={field.key}>
              {field.label}:
              {field.type === "select" ? (
                <select
                  value={values[field.key]}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                >
                  {field.options?.map((option) => (
                    <option key={option.name} value={option.value}>
                      {option.name}
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
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default BaseNode;
