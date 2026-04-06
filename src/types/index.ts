export interface UserFormData {
  gender: 'male' | 'female';
  age: number;
  height: number;
  weight: number;
  activity: 'min' | 'low' | 'mid' | 'high' | 'very-high';
}

export interface CalorieResult {
  maintenance: number;
  deficit: number;
}

export interface FormErrors {
  height?: string;
  age?: string;
  weight?: string;
}