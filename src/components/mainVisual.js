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
  return (
    <div className="main">
      <ColorBoxes background={hexGen(6)} fake={hexGen(6)} />
      <ColorBoxes background={hexGen(6)} fake={hexGen(6)} />
      <ColorBoxes background={hexGen(6)} fake={hexGen(6)} />
      <ColorBoxes background={hexGen(6)} fake={hexGen(6)} />
      <ColorBoxes background={hexGen(6)} fake={hexGen(6)} />
      <ColorBoxes background={hexGen(6)} />
    </div>
  );
};

export default MainVisual;
