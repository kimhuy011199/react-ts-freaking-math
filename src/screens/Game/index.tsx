import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import ProgressBar from '../../components/ProgressBar';
import GameOver from '../../components/GameOver';
import {
  getAnswers,
  getRandomNumbers,
  randomBoolean,
  randomColor,
} from '../../core/helper';
import style from './style.module.css';
import { ReactComponent as CheckIcon } from '../../assets/icons/check.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

const Game = () => {
  let timer: any;
  const [score, setScore] = useState<number>(0);
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);
  const [answer, setAnswer] = useState<number>(0);
  const [isTrueAnswer, setIsTrueAnswer] = useState<boolean>(true);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [color, setColor] = useState<string>(randomColor());

  const chooseAnswerHandler = (trueBtn: boolean = false) => {
    trueBtn === isTrueAnswer ? setScore((prev) => prev + 1) : setGameOver(true);
    clearTimeout(timer);
  };

  const resetGameHandler = () => {
    setScore(0);
    setColor(randomColor());
    setGameOver(false);
  };

  useEffect(() => {
    if (gameOver) {
      return;
    }
    console.log('run');
    const [number1, number2] = getRandomNumbers(score);
    const [correctAns, incorrectAns] = getAnswers(number1, number2);

    setNumber1(number1);
    setNumber2(number2);

    const isTrue = randomBoolean();
    setIsTrueAnswer(isTrue);
    setAnswer(isTrue ? correctAns : incorrectAns);
  }, [score, gameOver]);

  useEffect(() => {
    // eslint-disable-next-line
    timer = setTimeout(() => {
      setGameOver(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [score, gameOver]);

  if (gameOver) {
    return (
      <GameOver
        number1={number1}
        number2={number2}
        answer={answer}
        resetGameHandler={resetGameHandler}
        score={score}
        isTrueAnswer={isTrueAnswer}
      />
    );
  }

  return (
    <div className={style.game} style={{ backgroundColor: color }}>
      <ProgressBar score={score} />
      <h4 className={style.currentScore}>{score}</h4>
      <div className={style.number}>
        <h3>
          {number1} + {number2}
        </h3>
        <h3 className={style.answer}>= {answer}</h3>
      </div>
      <div className={style.action}>
        <Button
          functionHandler={() => chooseAnswerHandler(true)}
          icon={<CheckIcon />}
          size="lg"
        />
        <Button
          functionHandler={() => chooseAnswerHandler(false)}
          icon={<CloseIcon />}
          size="lg"
        />
      </div>
    </div>
  );
};

export default Game;
