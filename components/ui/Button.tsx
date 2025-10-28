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
  const baseStyles = 'px-10 py-4 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-500/50';

  const variants = {
    primary: 'bg-amber-700 hover:bg-amber-800 text-white shadow-xl hover:shadow-2xl',
    secondary: 'bg-green-700 hover:bg-green-800 text-white shadow-xl hover:shadow-2xl',
    outline: 'border-3 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white hover:border-amber-700 shadow-lg hover:shadow-xl'
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
