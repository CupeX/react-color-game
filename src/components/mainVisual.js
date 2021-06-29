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
  const [colors, setColors] = useState([]);
  const [trueColor, setTrueColor] = useState('');

  const color1 = hexGen(6);
  const color2 = hexGen(6);
  const color3 = hexGen(6);
  const color4 = hexGen(6);
  const color5 = hexGen(6);
  const color6 = hexGen(6);

  useEffect(() => {
    setColors([color1, color2, color3, color4, color5, color6]);
  }, []);

  useEffect(() => {
    setTrueColor(randomer);
  }, [trueColor]);

  const randomer = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="main">
      <ColorBoxes background={colors} trueColor={trueColor} />
    </div>
  );
};

export default MainVisual;
