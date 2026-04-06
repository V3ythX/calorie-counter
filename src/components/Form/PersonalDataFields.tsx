import React from 'react';
import PersonalDataField from './PersonalDataField';

interface PersonalDataFieldsProps {
  age: number;
  height: number;
  weight: number;
  errors: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PersonalDataFields: React.FC<PersonalDataFieldsProps> = ({//props
  age,
  height,
  weight,
  errors,
  onChange
}) => {
  const fields = [
    { id: 'age', name: 'age', label: 'Возраст', unit: 'лет', value: age, max: 150 },
    { id: 'height', name: 'height', label: 'Рост', unit: 'см', value: height },
    { id: 'weight', name: 'weight', label: 'Вес', unit: 'кг', value: weight }
  ];

  return (
    <fieldset className="form__group form__row">
      <legend className="visually-hidden">Параметры человека</legend>
      {fields.map(field => (
        <PersonalDataField
          key={field.id}
          id={field.id}
          name={field.name}
          label={field.label}
          unit={field.unit}
          value={field.value}
          error={errors[field.name]}
          max={field.max}
          onChange={onChange}
        />
      ))}
    </fieldset>
  );
};

export default PersonalDataFields;