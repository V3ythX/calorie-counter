import React from 'react';
import Button from '../Button/Button';

interface FormButtonsProps {
  isValid: boolean;
  onSubmit: () => void;
  onReset: () => void;
}

const FormButtons: React.FC<FormButtonsProps> = ({ isValid, onSubmit, onReset }) => {
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault();
    onReset();
  };

  return (
    <div className="form__btns">
      <Button type="submit" disabled={!isValid} onClick={handleSubmit}>
        Рассчитать
      </Button>
      <Button type="reset" variant="transparent" onClick={handleReset}>
        Очистить поля
      </Button>
    </div>
  );
};

export default FormButtons;