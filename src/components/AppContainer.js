import { useState, useEffect } from 'react';
import ColorGamePlayground from './ColorGamePlayground';
import ColorGameControls from './ColorGameControls';
import hexGenerator from './HexGenerator';

const AppContainer = () => {
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
  const [formIsValid, setFormIsValid] = useState(false);

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

  const customLvlHandler = prop => {
    setCustomLvlBoxes(prop);
  };

  const customLvlNameHandler = prop => {
    setCustomLvlName(prop);
  };

  const formSubmissionHandler = e => {
    e.preventDefault();
    if (customLvlName === '' && customLvlBoxes === '') {
      alert('Please, fill all fields!');
    } else {
      setCustomLvlBoxes('');
      setCustomLvlName('');
      const addLvl = {
        lvlName: customLvlName,
        lvlNumBoxes: +customLvlBoxes,
      };

      setCustomLvl(prevState => [addLvl, ...prevState]);
    }
    console.log(customLvlName, customLvlBoxes);
  };

  const deleteCustomLvlsHandler = () => {
    setCustomLvl([]);
  };

  return (
    <div className="d-flex container flex-row">
      <ColorGameControls
        score={score}
        onResetScore={() => resetScore()}
        onResetHandler={() => resetHandler()}
        onColorToggler={() => colorToggler()}
        onSaveScore={() => saveScore()}
        onLvlHandler={prop => lvlHandler(prop)}
        onCustomLvlHandler={prop => customLvlHandler(prop)}
        onDeleteCustomLvlsHandler={() => deleteCustomLvlsHandler()}
        onCustomLvlNameHandler={prop => customLvlNameHandler(prop)}
        onFormSubmissionHandler={e => formSubmissionHandler(e)}
        isHex={isHex}
        trueColor={trueColor}
        customLvl={customLvl}
        customLvlName={customLvlName}
        customLvlBoxes={customLvlBoxes}
        lvlButton={lvlButton}
      />
      <ColorGamePlayground
        onCheckColor={checkColorHandler}
        background={reducedBoxesList}
        trueColor={trueColor}
        score={score}
        boxes={boxesNumber}
      />
    </div>
  );
};

export default AppContainer;
