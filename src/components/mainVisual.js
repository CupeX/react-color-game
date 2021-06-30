import { useState, useEffect } from 'react';
import ButtonComponent from './ButtonComponent';
import ColorBoxes from './colorBoxes';

const hexGen = length => {
  var result = '#';
  var characters = 'abcdef0123456789';
  var charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const MainVisual = () => {
  const [counter, setCounter] = useState(3);
  const [colors, setColors] = useState([]);
  const [trueColor, setTrueColor] = useState('');

  useEffect(() => {
    getNewColors();
  }, [counter]);

  const getNewColors = () => {
    const newColors = Array.from(Array(counter).keys()).map(() => hexGen(6));

    const randomer = newColors[Math.floor(Math.random() * newColors.length)];
    setTrueColor(randomer);
    setColors(newColors);
  };

  const lvlHandler = prop => {
    setCounter(prop);
  };

  const resetHandler = () => {
    getNewColors();
  };

  return (
    <div className="container d-flex flex-column mt-5 ">
      <h3>Guess the color: {trueColor}</h3>
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
        resetLvl={() => resetHandler()}
        boxes={counter}
        background={colors}
        trueColor={trueColor}
      />
    </div>
  );
};

export default MainVisual;
