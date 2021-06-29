import './index.css';
import { nanoid } from 'nanoid';

const ColorBoxes = props => {
  const background = props.background;
  const trueColor = props.trueColor;

  const colorChecker = x => {
    console.log(x, trueColor);
    if (x === trueColor) {
      alert(`You get it! ${trueColor}`);
    } else {
      alert('You are wrong!');
    }
  };

  return (
    <div className="box-container">
      {background.map(x => (
        <div key={nanoid()}>
          <button
            className="box"
            style={{ background: x }}
            onClick={() => colorChecker(x)}
          ></button>
        </div>
      ))}
    </div>
  );
};

export default ColorBoxes;
