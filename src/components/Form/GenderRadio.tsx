import React from 'react';

interface GenderRadioProps {
  selectedGender: 'male' | 'female';
  onChange: (gender: 'male' | 'female') => void;
}

const GenderRadio: React.FC<GenderRadioProps> = ({ selectedGender, onChange }) => {
  const genders = [
    { id: 'male', label: 'Мужской', value: 'male' as const },
    { id: 'female', label: 'Женский', value: 'female' as const }
  ];

  return (
    <div className="form__btn-radios">
      {genders.map(gender => (
        <div className="form__btn-radio" key={gender.id}>
          <input
            type="radio"
            id={gender.id}
            name="gender"
            value={gender.value}
            checked={selectedGender === gender.value}
            onChange={() => onChange(gender.value)}
          />
          <label htmlFor={gender.id}>{gender.label}</label>
        </div>
      ))}
    </div>
  );
};

export default GenderRadio;