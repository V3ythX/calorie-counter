import { create } from 'zustand';
import type { CalorieState } from './types';
import type { UserFormData } from '../types';

const initialState: UserFormData = {
  gender: 'male',
  age: 0,
  height: 0,
  weight: 0,
  activity: 'min'
};

export const useCalorieStore = create<CalorieState>((set) => ({
  formData: initialState,
  result: null,
  isResultVisible: false,
  errors: {},

  updateFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data }
    })),

  setResult: (result) =>
    set({
      result,
      isResultVisible: true
    }),

  resetForm: () =>
    set({
      formData: initialState,
      result: null,
      isResultVisible: false,
      errors: {}
    }),

  setError: (field, error) =>
    set((state) => ({
      errors: { ...state.errors, [field]: error }
    })),

  clearError: (field) =>
    set((state) => {
      const newErrors = { ...state.errors };
      delete newErrors[field];
      return { errors: newErrors };
    })
}));