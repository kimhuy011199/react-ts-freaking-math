import React from 'react';
import style from './style.module.css';

interface ScoreTextProps {
  text: string;
  score: number;
}

const ScoreText = (props: ScoreTextProps) => {
  const { text, score } = props;
  return (
    <div className={style.scoreText}>
      <h2 className={style.text}>{text}</h2>
      <h2 className={style.score}>{score}</h2>
    </div>
  );
};

export default ScoreText;
