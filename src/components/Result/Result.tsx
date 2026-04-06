import React from 'react';
import { useCalorieStore } from '../../store/useCalorieStore';

const Result: React.FC = () => {
  const { result, isResultVisible } = useCalorieStore();

  if (!result) return null;

  return (
    <div className={`counter-result wrapper ${isResultVisible ? 'counter-result_active' : ''}`}>
      <h2 className="counter-result__title h2">Ваш результат</h2>
      <div className="counter-result__body">
        <p className="counter-result__text text">
          Суточная норма - <strong>{result.deficit} ккал</strong>, необходимая организму для
          нормального функционирования.
        </p>
        <p className="counter-result__text text">
          Для поддержания веса нужно употреблять <strong>{result.maintenance} ккал</strong> в
          день.
        </p>
      </div>
    </div>
  );
};

export default Result;