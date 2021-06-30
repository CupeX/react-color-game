import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

const ColorBoxes = props => {
  const background = props.background;
  const [newList, setNewList] = useState([]);
  const trueColor = props.trueColor;

  useEffect(() => {
    setNewList(background);
  }, [background]);

  const colorChecker = x => {
    const index = background.indexOf(x);
    if (x === trueColor) {
      alert(`You get it, good job! ${trueColor}`);
    } else {
      if (index > -1) {
        background.splice(index, 1);
        const updateList = [...background];
        setNewList(updateList);
      }
    }
  };

  return (
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
  );
};

export default ColorBoxes;
