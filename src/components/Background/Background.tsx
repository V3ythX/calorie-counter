import React from 'react';
import bgWebp from "../../assets/images/bg.webp"
import bgJpg from "../../assets/images/bg.jpeg"

const Background: React.FC = () => {
  return (
    <div className="bg">
      <div className="bg__overlay"></div>
      <picture className="bg__img">
        <source srcSet={bgWebp} type="image/webp" />
        <img src={bgJpg} alt="Фоновое изображение" />
      </picture>
    </div>
  );
};

export default Background;