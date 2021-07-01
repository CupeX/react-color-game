import { useState, useEffect } from 'react';
import ButtonComponent from './ButtonComponent';
import ColorBoxes from './ColorBoxes';
import hexGenerator from './HexGenerator';
import hexToRgb from './HexToRgb';
import {
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from 'reactstrap';

const MainVisual = () => {
  const [boxesNumber, setBoxesNumber] = useState(3);
  const [scoreCounter, setScoreCounter] = useState(1);
  const [colors, setColors] = useState([]);
  const [trueColor, setTrueColor] = useState('');
  const [isHex, setIsHex] = useState(true);
  const [score, setScore] = useState(0);
  const [reducedBoxesList, setReducedBoxesList] = useState([]);
  const [lvlButton, setLvlButton] = useState([1, 2, 3, 4, 5]);
  const [customLvl, setCustomLvl] = useState('');

  useEffect(() => {
    getNewColors();
    setScore(+window.localStorage.getItem('score'));
  }, [boxesNumber]);

  const getNewColors = () => {
    const newColors = Array.from(Array(boxesNumber).keys()).map(() =>
      hexGenerator(6)
    );

    const randomer = newColors[Math.floor(Math.random() * newColors.length)];
    setTrueColor(randomer);
    setColors(newColors);
    setReducedBoxesList(newColors);
  };

  const lvlHandler = prop => {
    setBoxesNumber(prop);
  };

  const resetHandler = () => {
    getNewColors();
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

  const colorToggler = () => {
    setIsHex(!isHex);
  };

  const resetScore = () => {
    setScore(0);
    window.localStorage.removeItem('score');
  };

  const saveScore = () => {
    window.localStorage.setItem('score', score);
  };

  const customLvlHandler = e => {
    setCustomLvl(e.target.value);
  };

  const formSubmissionHandler = e => {
    e.preventDefault();
    lvlHandler(+customLvl);
    getNewColors();
    setCustomLvl('');
  };

  return (
    <div className="container d-flex flex-column mt-5 col-xl-4 col-lg-6">
      <div className="border-bottom border-dark mb-3">
        <h3>Guess the color?</h3>
        {isHex ? (
          <h3>hex: {trueColor}</h3>
        ) : (
          <h3>rgb: {hexToRgb(trueColor)}</h3>
        )}
        <ButtonComponent
          onClick={() => colorToggler()}
          color="primary"
          className="my-3"
        >
          {isHex ? 'convert to RGB' : 'convert to HEX'}
        </ButtonComponent>
      </div>

      <div className="border-bottom border-dark pb-3">
        <div className="d-flex justify-content-between mb-3">
          {lvlButton.map(x => (
            <Button onClick={() => lvlHandler(x * 3)} color="success">
              {' '}
              lvl {x}
            </Button>
          ))}

          <ButtonComponent onClick={() => resetHandler()} color="danger">
            RESET LVL
          </ButtonComponent>
        </div>

        <form onSubmit={formSubmissionHandler}>
          <InputGroup className="py-1">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>add custom number of boxes?</InputGroupText>
            </InputGroupAddon>
            <Input
              type="number"
              name="lvls"
              value={customLvl}
              onChange={customLvlHandler}
            />
            <Button type="submit" color="success">
              add
            </Button>
          </InputGroup>
        </form>
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
