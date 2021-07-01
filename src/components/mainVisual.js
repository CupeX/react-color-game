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
  const [rgbResult, setRgbResult] = useState([]);
  const [isHex, setIsHex] = useState(true);
  const [isGenerated, setIsGenerated] = useState(false);

  useEffect(() => {
    getNewColors();
    if (isGenerated) {
      hexToRgb();
    }
  }, [counter, isGenerated]);

  const getNewColors = () => {
    const newColors = Array.from(Array(counter).keys()).map(() => hexGen(6));

    const randomer = newColors[Math.floor(Math.random() * newColors.length)];
    setTrueColor(randomer);
    setColors(newColors);
    setIsGenerated(true);
  };

  const lvlHandler = prop => {
    setCounter(prop);
    setRgbResult([]);
    setIsGenerated(false);
  };

  const resetHandler = () => {
    getNewColors();
    setRgbResult([]);
    setIsGenerated(false);
  };

  const hexToRgb = () => {
    const hexBase = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
    ];
    const cutter = trueColor.substring(1).match(/.{1,2}/g);

    for (let i = 0; i < cutter.length; i++) {
      const value1 = hexBase.indexOf(cutter[i][0]) * 16;
      const value2 = hexBase.indexOf(cutter[i][1]);
      const result = value1 + value2 + ', ';

      setRgbResult(currentResult => [...currentResult, result]);
    }
  };

  const colorToggler = () => {
    setIsHex(!isHex);
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
        resetLvl={() => resetHandler()}
        boxes={counter}
        background={colors}
        trueColor={trueColor}
      />
    </div>
  );
};

export default MainVisual;
