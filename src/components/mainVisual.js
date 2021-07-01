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
  const [customLvlName, setCustomLvlName] = useState('');
  const [customLvlBoxes, setCustomLvlBoxes] = useState('');
  const [customLvl, setCustomLvl] = useState([]);

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
    setCustomLvlBoxes(e.target.value);
  };

  const customLvlNameHandler = e => {
    setCustomLvlName(e.target.value);
  };

  const formSubmissionHandler = e => {
    e.preventDefault();
    // lvlHandler(+customLvl);
    // getNewColors();
    setCustomLvlBoxes('');
    setCustomLvlName('');
    const addLvl = {
      lvlName: customLvlName,
      lvlNumBoxes: +customLvlBoxes,
    };

    setCustomLvl(prevState => [addLvl, ...prevState]);
  };

  const deleteCustomLvlsHandler = () => {
    setCustomLvl([]);
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

      <div className="border-bottom border-dark">
        <div className="d-flex justify-content-between mb-3 border-bottom border-dark pb-3">
          {lvlButton.map(x => (
            <Button onClick={() => lvlHandler(x * 3)} color="success">
              lvl {x}
            </Button>
          ))}

          <ButtonComponent onClick={() => resetHandler()} color="danger">
            RESET LVL
          </ButtonComponent>
        </div>

        <div>
          <h5>Custom levels:</h5>
          {customLvl.map(x => (
            <Button
              onClick={() => lvlHandler(x.lvlNumBoxes)}
              color="success"
              className="m-2"
            >
              {x.lvlName}
            </Button>
          ))}
        </div>

        <form onSubmit={formSubmissionHandler}>
          <InputGroup className="py-1">
            <InputGroupAddon addonType="prepend" className="w-50">
              <InputGroupText>add custom lvl name:</InputGroupText>
            </InputGroupAddon>
            <Input
              type="text"
              name="lvl name"
              value={customLvlName}
              onChange={customLvlNameHandler}
            />
            <InputGroupAddon addonType="prepend" className="w-50">
              <InputGroupText>add number of boxes:</InputGroupText>
            </InputGroupAddon>
            <Input
              type="number"
              name="lvls"
              value={customLvlBoxes}
              onChange={customLvlHandler}
            />
          </InputGroup>

          <Button type="submit" color="success" className="m-2">
            add custom lvl
          </Button>
          <Button
            onClick={() => deleteCustomLvlsHandler()}
            type="btn"
            color="danger"
            className="m-2"
          >
            delete custom levels
          </Button>
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
