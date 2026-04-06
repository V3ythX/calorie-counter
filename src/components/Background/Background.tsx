import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="bg">
      <div className="bg__overlay"></div>
      <picture className="bg__img">
        <source srcSet="/assets/images/bg.webp" type="./src/assets/images/bg.webp" />
        <img src="./src/assets/images/bg.jpeg" alt="Фоновое изображение" />
      </picture>
    </div>
  );
};

export default Background;