import React from 'react';
import Background from './components/Background/Background';
import Counter from './components/Counter/Counter';
import Result from './components/Result/Result';
import './styles/index.css';

const App: React.FC = () => {
  return (
    <>
      <Background />
      <Counter />
      <Result />
    </>
  );
};

export default App;