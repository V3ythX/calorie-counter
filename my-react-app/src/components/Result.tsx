import React from 'react';
import { useStore } from '../store/useStore';

const Result: React.FC = () => {
  const { results, showResult } = useStore();

  if (!showResult || !results) return null;

  return (
    <div className="counter-result counter-result_active">
      <h3 className="counter-result__title">Результат</h3>
      <div className="counter-result__item">
        <span>Основной обмен (BMR):</span>
        <strong>{results.bmr} ккал</strong>
      </div>
      <div className="counter-result__item">
        <span>Поддержание веса:</span>
        <strong>{results.maintenance} ккал</strong>
      </div>
    </div>
  );
};

export default Result;