import { useState, useEffect } from 'react';
import ButtonComponent from './ButtonComponent';
import ColorBoxes from './colorBoxes';
import hexGenerator from './HexGenerator';
import hexToRgb from './HexToRgb';

const MainVisual = () => {
  const [boxesNumber, setBoxesNumber] = useState(3);
  const [scoreCounter, setScoreCounter] = useState(1);
  const [colors, setColors] = useState([]);
  const [trueColor, setTrueColor] = useState('');
  const [rgbResult, setRgbResult] = useState([]);
  const [isHex, setIsHex] = useState(true);
  const [isGenerated, setIsGenerated] = useState(false);
  const [score, setScore] = useState(0);
  const [reducedBoxesList, setReducedBoxesList] = useState([]);

  useEffect(() => {
    getNewColors();
    setRgbResult(hexToRgb(trueColor, isGenerated));
  }, [boxesNumber, isGenerated]);

  const getNewColors = () => {
    const newColors = Array.from(Array(boxesNumber).keys()).map(() =>
      hexGenerator(6)
    );

    const randomer = newColors[Math.floor(Math.random() * newColors.length)];
    setTrueColor(randomer);
    setColors(newColors);
    setReducedBoxesList(newColors);
    setIsGenerated(true);
  };

  const lvlHandler = prop => {
    setBoxesNumber(prop);
    setRgbResult([]);
    setIsGenerated(false);
  };

  const resetHandler = () => {
    getNewColors();
    setRgbResult([]);
    setIsGenerated(false);
  };

  const colorToggler = () => {
    setIsHex(!isHex);
  };

  const checkColorHandler = x => {
    if (x === trueColor) {
      alert(
        `Good job! You get it after ${scoreCounter} attempts, and recive ${
          boxesNumber - scoreCounter + 1
        } points!`
      );
      setScoreCounter(1);
      setScore(score + boxesNumber - scoreCounter + 1);
      resetHandler();
    } else {
      const updatedList = reducedBoxesList.filter(item => x !== item);
      setReducedBoxesList(updatedList);
      setScoreCounter(scoreCounter + 1);
    }
  };

  useEffect(() => {
    setScore(+window.localStorage.getItem('score'));
  }, []);

  const resetScore = () => {
    setScore(0);
    window.localStorage.removeItem('score');
  };

  const saveScore = () => {
    window.localStorage.setItem('score', score);
  };

  return (
    <div className="container d-flex flex-column mt-5 col-xl-4 col-lg-6">
      <div className="border-bottom border-dark mb-3">
        <h3>Guess the color?</h3>
        {isHex ? <h3>hex: {trueColor}</h3> : <h3>rgb: {rgbResult}</h3>}
        <ButtonComponent
          onClick={() => colorToggler()}
          color="primary"
          className="my-3"
        >
          {isHex ? 'convert to RGB' : 'convert to HEX'}
        </ButtonComponent>
      </div>

      <div className="d-flex justify-content-between border-bottom border-dark pb-3">
        <ButtonComponent onClick={() => lvlHandler(3)} color="success">
          lvl 1
        </ButtonComponent>
        <ButtonComponent onClick={() => lvlHandler(6)} color="success">
          lvl 2
        </ButtonComponent>
        <ButtonComponent onClick={() => lvlHandler(9)} color="success">
          lvl 3
        </ButtonComponent>

        <ButtonComponent onClick={() => resetHandler()} color="danger">
          RESET LVL
        </ButtonComponent>
      </div>
      <ColorBoxes
        onCheckColor={checkColorHandler}
        onResetScore={() => resetScore()}
        onSaveScore={() => saveScore()}
        background={reducedBoxesList}
        trueColor={trueColor}
        score={score}
      />
    </div>
  );
};

export default MainVisual;
