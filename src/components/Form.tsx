import React from 'react';
import { useStore } from '../store/useStore';
import type { Gender, ActivityLevel, FormState } from '../types';

const Form: React.FC = () => {
  const {
    formData,
    errors,
    setGender,
    setAge,
    setHeight,
    setWeight,
    setActivity,
    calculate,
    reset,
  } = useStore();

  // Проверка валидности формы: все поля заполнены и ошибок нет
  const isFormValid = () => {
    return (
      formData.age !== '' &&
      formData.height !== '' &&
      formData.weight !== '' &&
      errors.age === '' &&
      errors.height === '' &&
      errors.weight === ''
    );
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setAge('');
    } else {
      const num = Number(value);
      if (!isNaN(num)) setAge(num);
    }
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setHeight('');
    } else {
      const num = Number(value);
      if (!isNaN(num)) setHeight(num);
    }
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setWeight('');
    } else {
      const num = Number(value);
      if (!isNaN(num)) setWeight(num);
    }
  };

  return (
    <div className="form">
      <div className="form__group">
        <label className="form__label">Пол</label>
        <div className="form__radio-group">
          <label className="form__radio">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={() => setGender('male')}
            />
            Мужчина
          </label>
          <label className="form__radio">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={() => setGender('female')}
            />
            Женщина
          </label>
        </div>
      </div>

      <div className="form__group">
        <label className="form__label">Возраст (лет)</label>
        <div className={`form__control ${errors.age ? 'form__control_error' : ''}`}>
          <input
            type="number"
            value={formData.age === '' ? '' : formData.age}
            onChange={handleAgeChange}
            placeholder="0-150"
          />
        </div>
        {errors.age && <span className="form__error">{errors.age}</span>}
      </div>

      <div className="form__group">
        <label className="form__label">Рост (см)</label>
        <div className={`form__control ${errors.height ? 'form__control_error' : ''}`}>
          <input
            type="number"
            value={formData.height === '' ? '' : formData.height}
            onChange={handleHeightChange}
            placeholder="≥0"
          />
        </div>
        {errors.height && <span className="form__error">{errors.height}</span>}
      </div>

      <div className="form__group">
        <label className="form__label">Вес (кг)</label>
        <div className={`form__control ${errors.weight ? 'form__control_error' : ''}`}>
          <input
            type="number"
            value={formData.weight === '' ? '' : formData.weight}
            onChange={handleWeightChange}
            placeholder="≥0"
          />
        </div>
        {errors.weight && <span className="form__error">{errors.weight}</span>}
      </div>

      <div className="form__group">
        <label className="form__label">Физическая активность</label>
        <select
          className="form__select"
          value={formData.activity}
          onChange={(e) => setActivity(e.target.value as ActivityLevel)}
        >
          <option value="minimal">Минимальная</option>
          <option value="low">Низкая</option>
          <option value="medium">Средняя</option>
          <option value="high">Высокая</option>
          <option value="veryHigh">Очень высокая</option>
        </select>
      </div>

      <div className="form__actions">
        <button
          className="button button_primary"
          onClick={calculate}
          disabled={!isFormValid()}
        >
          Рассчитать
        </button>
        <button className="button button_secondary" onClick={reset}>
          Очистить поля
        </button>
      </div>
    </div>
  );
};

export default Form;