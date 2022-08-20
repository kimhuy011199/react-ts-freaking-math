import React from 'react';
import Button from '../../components/Button';
import ScoreText from '../../components/ScoreText';
import style from './style.module.css';
import { getHighestScore } from '../../core/helper';
import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg';

interface HomeProps {
  switchMode: () => void;
}

const Home = (props: HomeProps) => {
  const { switchMode } = props;
  const highestScore = getHighestScore() || 0;

  return (
    <div className={style.home}>
      <div className={style.logoWrapper}>
        <img src="/logo.png" alt="Logo" className={style.logo} />
      </div>
      <Button functionHandler={switchMode} icon={<PlayIcon />}></Button>
      <p className={style.desc}>
        You have only ONE second to choose correct answer
      </p>
      <ScoreText text="best" score={highestScore} />
    </div>
  );
};

export default Home;
