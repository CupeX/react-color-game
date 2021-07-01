import { nanoid } from 'nanoid';
import ButtonComponent from './ButtonComponent';

const ColorBoxes = props => {
  return (
    <div>
      <div className="d-flex justify-content-between my-3">
        <h2>score: {props.score}</h2>
        <ButtonComponent onClick={props.onSaveScore} color="success">
          save score
        </ButtonComponent>
        <ButtonComponent onClick={props.onResetScore} color="danger">
          reset score
        </ButtonComponent>
      </div>
      <div className="d-flex flex-wrap justify-content-between">
        {props.background.map(x => (
          <div key={nanoid()} className="col-4">
            <button
              className="box p-5 my-3"
              style={{ background: x }}
              onClick={() => props.onCheckColor(x)}
            ></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorBoxes;
