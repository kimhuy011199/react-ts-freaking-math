import React, { useEffect } from 'react';
import Button from '../Button';
import { getHighestScore, saveHighestScore } from '../../core/helper';
import { ReactComponent as ReplayIcon } from '../../assets/icons/replay.svg';
import ScoreText from '../ScoreText';
import { ReactComponent as CheckIcon } from '../../assets/icons/check.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import style from './style.module.css';

interface GameOverProps {
  resetGameHandler: () => void;
  score: number;
  number1: number;
  number2: number;
  answer: number;
  isTrueAnswer: boolean;
}

const GameOver = (props: GameOverProps) => {
  const { resetGameHandler, score, number1, number2, answer, isTrueAnswer } =
    props;
  const highestScore = getHighestScore() || 0;

  useEffect(() => {
    if (score > highestScore) {
      saveHighestScore(score);
    }
  }, [score, highestScore]);

  return (
    <div className={style.gameOver}>
      <div className={style.statement}>
        <h3 className={style.number}>
          {number1} + {number2} = {answer}
        </h3>
        <div className={style.iconWrapper}>
          {isTrueAnswer ? (
            <CheckIcon className={style.icon} />
          ) : (
            <CloseIcon className={style.icon} />
          )}
        </div>
      </div>
      <ScoreText text="current" score={score} />
      <ScoreText
        text="best"
        score={score > highestScore ? score : highestScore}
      />
      <div className={style.action}>
        <Button functionHandler={resetGameHandler} icon={<ReplayIcon />} />
      </div>
    </div>
  );
};

export default GameOver;
