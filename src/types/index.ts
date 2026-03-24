export type Gender = 'male' | 'female';
export type ActivityLevel = 'minimal' | 'low' | 'medium' | 'high' | 'veryHigh';

export interface FormState {
  gender: Gender;
  age: number | '';
  height: number | '';
  weight: number | '';
  activity: ActivityLevel;
}

export interface Errors {
  age: string;
  height: string;
  weight: string;
}

export interface Results {
  bmr: number;        // основной обмен (ккал)
  maintenance: number; // поддержание веса (ккал)
}