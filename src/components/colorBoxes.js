import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import ButtonComponent from './ButtonComponent';

const ColorBoxes = props => {
  const resetLvl = props.resetLvl;
  const background = props.background;
  const boxes = props.boxes;
  const [newList, setNewList] = useState([]);
  const [counter, setCounter] = useState(1);
  const [score, setScore] = useState(0);
  const trueColor = props.trueColor;

  useEffect(() => {
    setNewList(background);
  }, [background]);

  const colorChecker = x => {
    if (x === trueColor) {
      alert(
        `Good job! You get it after ${counter} attempts, and recive ${
          boxes - counter + 1
        } points!`
      );
      setCounter(1);
      setScore(score + boxes - counter + 1);
      resetLvl();
    } else {
      const updatedList = newList.filter(item => x !== item);
      setNewList(updatedList);
      setCounter(counter + 1);
    }
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <div>
      <div className="d-flex justify-content-between my-3">
        <h2>score: {score}</h2>
        <ButtonComponent onClick={resetScore} color="danger">
          reset score
        </ButtonComponent>
      </div>
      <div className="d-flex flex-wrap justify-content-between">
        {newList.map(x => (
          <div key={nanoid()}>
            <button
              className="box p-5 my-3"
              style={{ background: x }}
              onClick={() => colorChecker(x)}
            ></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorBoxes;
