import React, { useEffect } from 'react';
import style from './style.module.css';

interface ProgressBarProps {
  score: number;
}

const ProgressBar = (props: ProgressBarProps) => {
  const { score } = props;

  useEffect(() => {
    const bar = document.querySelector('#bar');
    if (bar) {
      bar.classList.remove('progress-animation');
      setTimeout(() => {
        bar.classList.add('progress-animation');
      }, 0);
    }
  }, [score]);

  return <div id="bar" className={style.bar} />;
};

export default ProgressBar;
