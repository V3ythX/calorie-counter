import { useState, useEffect } from 'react';
import type { UserFormData } from '../types';

interface ValidationErrors {
  [key: string]: string;
}

export const useFormValidation = (formData: UserFormData) => {
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isValid, setIsValid] = useState(false);

  const validateField = (name: string, value: number): string => {
    // Проверка для возраста
    if (name === 'age') {
      if (value === null || value === undefined || value === 0) {
        return 'Возраст не может быть пустым';
      }
      if (value < 0) {
        return 'Возраст не может быть отрицательным';
      }
      if (value > 150) {
        return 'Возраст должен быть в диапазоне от 0 до 150';
      }
    }
    
    // Проверки для других полей
    if (value < 0) {
      switch (name) {
        case 'height':
          return 'Рост не может быть отрицательным';
        case 'weight':
          return 'Вес не может быть отрицательным';
        default:
          return '';
      }
    }
    
    return '';
  };

  const setFieldError = (name: string, error: string) => {
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const clearFieldError = (name: string) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  };

  const validateFieldAndUpdate = (name: string, value: number) => {
    const error = validateField(name, value);
    if (error) {
      setFieldError(name, error);
    } else {
      clearFieldError(name);
    }
    return error;
  };

  useEffect(() => {
    const hasErrors = Object.keys(errors).length > 0;
    // Проверяем, что все поля заполнены и находятся в допустимых диапазонах
    const hasValidData = 
      formData.age > 0 && formData.age <= 150 && 
      formData.height > 0 && 
      formData.weight > 0;
    
    setIsValid(hasValidData && !hasErrors);
  }, [formData, errors]);

  return {
    errors,
    isValid,
    validateFieldAndUpdate,
    clearFieldError,
    setFieldError
  };
};