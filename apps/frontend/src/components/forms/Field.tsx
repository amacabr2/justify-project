import React from "react";
import { Form } from "react-bootstrap";
import { Field as RField, useFormState } from "react-final-form";

type Props = {
  id: string;
  name: string;
  placeholder: string;
  type?: string;
  component?: 'input' | 'select' | 'textarea';
};

export const Field: React.FC<Props> = ({
  id,
  name,
  placeholder,
  type = "text",
  component = 'input',
}) => {
  const { errors, values } = useFormState();

  return (
    <Form.Group controlId={id}>
      <RField
        name={name}
        placeholder={placeholder}
        className="form-control"
        component={component}
        type={type}
      />
      {errors && !!errors[name] && values[name] && (
        <div className="invalid-form">
          {errors[name]}
        </div>
      )}
    </Form.Group>
  );
};
