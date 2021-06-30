import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

const ColorBoxes = props => {
  const reset = props.reset;
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
    const index = background.indexOf(x);
    if (x === trueColor) {
      alert(`Good job! You get it after ${counter} attempts`);
      setCounter(1);
      setScore(score + boxes - counter + 1);
      reset();
    } else {
      if (index > -1) {
        background.splice(index, 1);
        const updateList = [...background];
        setNewList(updateList);
      }
      setCounter(counter + 1);
      console.log(counter);
    }
  };

  return (
    <div>
      <h2>score: {score}</h2>
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
