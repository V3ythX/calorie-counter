import { useMemo } from 'react';
import type { UserFormData, CalorieResult } from '../types';

export const useCalorieCalculator = (formData: UserFormData) => {
  const calculateCalories = useMemo((): CalorieResult | null => {
    const { gender, age, height, weight, activity } = formData;

    
    if (age <= 0 || height <= 0 || weight <= 0) {// Валидация
      return null;
    }

    
    let bmr: number;
    if (gender === 'male') {// Расчет BMR 
      bmr = 66.5 + 13.75 * weight + 5.003 * height - 6.775 * age;
    } else {
      bmr = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
    }

    
    const activityMultipliers: Record<string, number> = {// Коэффициент активности
      min: 1.2,
      low: 1.375,
      mid: 1.55,
      high: 1.7,
      'very-high': 1.9
    };

    const multiplier = activityMultipliers[activity];
    const maintenance = Math.round(bmr * multiplier);
    const deficit = Math.round(maintenance - 500);

    return { maintenance, deficit };
  }, [formData]);

  return calculateCalories;
};