import type { UserFormData, CalorieResult } from '../types';

export interface CalorieState {
  formData: UserFormData;
  result: CalorieResult | null;
  isResultVisible: boolean;
  errors: Record<string, string>;
  
  // Actions
  updateFormData: (data: Partial<UserFormData>) => void;
  setResult: (result: CalorieResult) => void;
  resetForm: () => void;
  setError: (field: string, error: string) => void;
  clearError: (field: string) => void;
}