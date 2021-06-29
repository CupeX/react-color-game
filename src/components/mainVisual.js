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

const randomer = length => {
  var result = '';
  var characters = '123456';
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
    setTrueColor(randomer(1));
  }, []);

  return (
    <div className="main">
      <ColorBoxes
        background={color1}
        number={1}
        true={trueColor}
        fake={hexGen(6)}
      />
      <ColorBoxes
        background={color2}
        number={2}
        true={trueColor}
        fake={hexGen(6)}
      />
      <ColorBoxes
        background={color3}
        number={3}
        true={trueColor}
        fake={hexGen(6)}
      />
      <ColorBoxes
        background={color4}
        number={4}
        true={trueColor}
        fake={hexGen(6)}
      />
      <ColorBoxes
        background={color5}
        number={5}
        true={trueColor}
        fake={hexGen(6)}
      />
      <ColorBoxes
        background={color6}
        number={6}
        true={trueColor}
        fake={hexGen(6)}
      />
    </div>
  );
};

export default MainVisual;
