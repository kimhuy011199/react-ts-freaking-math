import { COLOR_CODE } from './contants';

export const randomInteger = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const randomBoolean = () => Math.random() < 0.5;

export const getRandomNumbers = (score: number) => {
  let range1 = [1, 9];
  let range2 = [1, 9];

  if (score >= 0 && score <= 10) {
    range1 = [1, 9];
    range2 = [1, 9];
  }
  if (score >= 11 && score <= 25) {
    range1 = [1, 9];
    range2 = [10, 19];
  }
  if (score >= 26 && score <= 40) {
    range1 = [10, 19];
    range2 = [10, 19];
  }
  if (score >= 41 && score <= 55) {
    range1 = [10, 19];
    range2 = [10, 29];
  }
  if (score >= 56 && score <= 70) {
    range1 = [10, 29];
    range2 = [10, 29];
  }
  if (score >= 71 && score <= 100) {
    range1 = [10, 29];
    range2 = [10, 39];
  }
  if (score >= 101) {
    range1 = [20, 39];
    range2 = [20, 39];
  }

  const number1 = randomInteger(range1[0], range1[1]);
  const number2 = randomInteger(range2[0], range2[1]);
  return [number1, number2];
};

export const getAnswers = (number1: number, number2: number) => {
  const correctAns = number1 + number2;
  const randomNumber = randomInteger(1, 3);
  const incorrectAns = randomBoolean()
    ? correctAns + randomNumber
    : correctAns - randomNumber;
  return [correctAns, incorrectAns];
};

export const randomColor = () => {
  const colorArr = Object.values(COLOR_CODE);
  const index = randomInteger(0, colorArr.length - 1);
  return colorArr[index];
};

export const saveHighestScore = (score: number) => {
  localStorage.setItem('score', JSON.stringify(score));
};

export const getHighestScore = () => {
  if (localStorage.getItem('score')) {
    return JSON.parse(localStorage.getItem('score') || '');
  }
};
