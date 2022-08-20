import React from 'react';
import style from './style.module.css';

interface ButtonProps {
  functionHandler: () => void;
  icon: any;
  size?: 'sm' | 'lg';
}

const Button = (props: ButtonProps) => {
  const { functionHandler, icon, size = 'sm' } = props;

  return (
    <button className={`${style.btn} ${style[size]}`} onClick={functionHandler}>
      {icon}
    </button>
  );
};

export default Button;
