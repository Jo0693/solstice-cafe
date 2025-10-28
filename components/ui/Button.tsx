import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105';

  const variants = {
    primary: 'bg-amber-700 hover:bg-amber-800 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-green-700 hover:bg-green-800 text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
