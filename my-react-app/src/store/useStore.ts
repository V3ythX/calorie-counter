import { create } from 'zustand';
import { FormData, Errors, Results, ActivityLevel, Gender } from '../types';

interface Store {
  formData: FormData;
  errors: Errors;
  results: Results | null;
  showResult: boolean;
  setGender: (gender: Gender) => void;
  setAge: (age: number | '') => void;
  setHeight: (height: number | '') => void;
  setWeight: (weight: number | '') => void;
  setActivity: (activity: ActivityLevel) => void;
  setError: (field: keyof Errors, message: string) => void;
  clearErrors: () => void;
  calculate: () => void;
  reset: () => void;
}

const validateNumber = (value: number | '', min: number, max?: number): string => {
  if (value === '' || value === undefined) return 'Обязательное поле';
  if (isNaN(value)) return 'Введите число';
  if (value < min) return `Значение не может быть меньше ${min}`;
  if (max !== undefined && value > max) return `Значение не может быть больше ${max}`;
  return '';
};

export const useStore = create<Store>((set, get) => ({
  formData: {
    gender: 'male',
    age: '',
    height: '',
    weight: '',
    activity: 'minimal',
  },
  errors: {
    age: '',
    height: '',
    weight: '',
  },
  results: null,
  showResult: false,

  setGender: (gender) => set((state) => ({ formData: { ...state.formData, gender } })),

  setAge: (age) => {
    // Коррекция значений
    let correctedAge = age;
    if (typeof age === 'number') {
      if (age < 0) correctedAge = 0;
      if (age > 150) correctedAge = 150;
    }
    set((state) => ({ formData: { ...state.formData, age: correctedAge } }));
    const error = validateNumber(correctedAge, 0, 150);
    set((state) => ({ errors: { ...state.errors, age: error } }));
  },

  setHeight: (height) => {
    let correctedHeight = height;
    if (typeof height === 'number' && height < 0) correctedHeight = 0;
    set((state) => ({ formData: { ...state.formData, height: correctedHeight } }));
    const error = validateNumber(correctedHeight, 0);
    set((state) => ({ errors: { ...state.errors, height: error } }));
  },

  setWeight: (weight) => {
    let correctedWeight = weight;
    if (typeof weight === 'number' && weight < 0) correctedWeight = 0;
    set((state) => ({ formData: { ...state.formData, weight: correctedWeight } }));
    const error = validateNumber(correctedWeight, 0);
    set((state) => ({ errors: { ...state.errors, weight: error } }));
  },

  setActivity: (activity) => set((state) => ({ formData: { ...state.formData, activity } })),

  setError: (field, message) =>
    set((state) => ({ errors: { ...state.errors, [field]: message } })),

  clearErrors: () =>
    set((state) => ({
      errors: { age: '', height: '', weight: '' },
    })),

  calculate: () => {
    const { gender, age, height, weight, activity } = get().formData;
    // Проверяем, что все поля заполнены и валидны
    if (
      age === '' ||
      height === '' ||
      weight === '' ||
      get().errors.age !== '' ||
      get().errors.height !== '' ||
      get().errors.weight !== ''
    ) {
      return;
    }

    let bmr = 0;
    if (gender === 'male') {
      bmr = 66.5 + 13.75 * (weight as number) + 5.003 * (height as number) - 6.775 * (age as number);
    } else {
      bmr = 655.1 + 9.563 * (weight as number) + 1.85 * (height as number) - 4.676 * (age as number);
    }

    let activityFactor = 1.2;
    switch (activity) {
      case 'minimal':
        activityFactor = 1.2;
        break;
      case 'low':
        activityFactor = 1.375;
        break;
      case 'medium':
        activityFactor = 1.55;
        break;
      case 'high':
        activityFactor = 1.7;
        break;
      case 'veryHigh':
        activityFactor = 1.9;
        break;
    }
    const maintenance = bmr * activityFactor;

    set({
      results: {
        bmr: Math.round(bmr),
        maintenance: Math.round(maintenance),
      },
      showResult: true,
    });
  },

  reset: () => {
    set({
      formData: {
        gender: 'male',
        age: '',
        height: '',
        weight: '',
        activity: 'minimal',
      },
      errors: {
        age: '',
        height: '',
        weight: '',
      },
      results: null,
      showResult: false,
    });
  },
}));