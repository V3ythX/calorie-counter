import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'transparent';
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Исправленный 
}

const Button: React.FC<ButtonProps> = ({//props
  children,
  type = 'button',
  variant = 'primary',
  disabled = false,
  onClick
}) => {
  const className = `btn ${variant === 'transparent' ? 'btn_transparent' : ''}`;

  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;