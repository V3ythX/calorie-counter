import React from 'react';

interface PersonalDataFieldProps {
  id: string;
  name: string;
  label: string;
  unit: string;
  value: number;
  error?: string;
  min?: number;
  max?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PersonalDataField: React.FC<PersonalDataFieldProps> = ({//props
  id,
  name,
  label,
  unit,
  value,
  error,
  min = 0,
  max,
  onChange
}) => {
  return (
    <div className="form__group">
      <label className="form__label h2" htmlFor={id}>
        {label} <span className="text-light">{unit}</span>
      </label>
      <input
        className={`form__control ${error ? 'form__control_error' : ''}`}
        type="number"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      />
      {error && <span className="form__error">{error}</span>}
    </div>
  );
};

export default PersonalDataField;