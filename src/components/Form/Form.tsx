import React from 'react';
import { useCalorieStore } from '../../store/useCalorieStore';
import { useCalorieCalculator } from '../../hooks/useCalorieCalculator';
import { useFormValidation } from '../../hooks/useFormValidation';
import GenderRadio from './GenderRadio';
import ActivityRadio from './ActivityRadio';
import PersonalDataFields from './PersonalDataFields';
import FormButtons from './FormButtons';

const Form: React.FC = () => {
  const { formData, updateFormData, setResult, resetForm } = useCalorieStore();
  const { errors, isValid, validateFieldAndUpdate } = useFormValidation(formData);
  const calculatedResult = useCalorieCalculator(formData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    
    let finalValue: number;// Обработка пустого значения
    if (value === '') {
      finalValue = 0;
    } else {
      const numValue = parseInt(value, 10);
      finalValue = isNaN(numValue) ? 0 : numValue;
    }
    
    updateFormData({ [name]: finalValue });
    validateFieldAndUpdate(name, finalValue);
  };

  const handleSubmit = () => {
    if (isValid && calculatedResult) {
      setResult(calculatedResult);
    }
  };

  const handleReset = () => {
    resetForm();
  };

  return (
    <form className="form">
      <fieldset className="form__group">
        <legend className="form__legend h2">Пол</legend>
        <GenderRadio 
          selectedGender={formData.gender} 
          onChange={(gender) => updateFormData({ gender })} 
        />
      </fieldset>

      <PersonalDataFields
        age={formData.age}
        height={formData.height}
        weight={formData.weight}
        errors={errors}
        onChange={handleInputChange}
      />

      <fieldset className="form__group">
        <legend className="form__legend h2">Физическая активность</legend>
        <ActivityRadio 
          selectedActivity={formData.activity} 
          onChange={(activity) => updateFormData({ activity })} 
        />
      </fieldset>

      <FormButtons
        isValid={isValid}
        onSubmit={handleSubmit}
        onReset={handleReset}
      />
    </form>
  );
};

export default Form;