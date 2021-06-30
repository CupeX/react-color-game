import { useState, useEffect } from 'react';
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
    const newColors = [];
    for (let i = 0; i < counter; i++) {
      const color = hexGen(6);
      newColors.push(color);
    }
    const randomer = newColors[Math.floor(Math.random() * newColors.length)];
    setTrueColor(randomer);
    setColors(newColors);
  };

  const lvlHandler = prop => {
    setCounter(prop);
    getNewColors();
  };

  const resetHandler = () => {
    setCounter(3);
    getNewColors();
  };

  return (
    <div className="main">
      <div className="btn-wrapper">
        <button onClick={() => lvlHandler(3)} className="btn lvl-btn">
          lvl 1
        </button>
        <button onClick={() => lvlHandler(6)} className="btn lvl-btn">
          lvl 2
        </button>
        <button onClick={() => lvlHandler(9)} className="btn lvl-btn">
          lvl 3
        </button>
        <button onClick={() => resetHandler()} className="btn reset-btn">
          RESET
        </button>
      </div>
      <ColorBoxes background={colors} trueColor={trueColor} />
    </div>
  );
};

export default MainVisual;
