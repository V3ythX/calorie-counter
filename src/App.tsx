import React from 'react';
import Form from './components/Form';
import Result from './components/Result';
import './styles/index.css'; // предполагается, что стили скопированы из верстки

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="container">
        <h1 className="app__title">Счетчик калорий</h1>
        <div className="app__content">
          <div className="form-block">
            <Form />
          </div>
          <div className="result-block">
            <Result />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;