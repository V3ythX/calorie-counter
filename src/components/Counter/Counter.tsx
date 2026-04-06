import React from 'react';
import Form from '../Form/Form';

const Counter: React.FC = () => {
  return (
    <div className="counter">
      <h1 className="counter__title h1">Счетчик калорий</h1>
      <div className="counter__body wrapper">
        <Form />
      </div>
    </div>
  );
};

export default Counter;