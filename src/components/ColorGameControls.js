import ButtonComponent from './ButtonComponent';
import hexToRgb from './HexToRgb';
import {
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from 'reactstrap';

const ColorGameControls = props => {
  const score = props.score;
  const isHex = props.isHex;
  const trueColor = props.trueColor;
  const customLvl = props.customLvl;
  const customLvlName = props.customLvlName;
  const customLvlBoxes = props.customLvlBoxes;

  return (
    <div className="col-4 vh-100">
      <div className="d-flex justify-content-between border-bottom border-dark my-3 pb-3">
        <h2>score: {score}</h2>
        <ButtonComponent onClick={() => props.onSaveScore()} color="success">
          save score
        </ButtonComponent>
        <ButtonComponent onClick={() => props.onResetScore()} color="danger">
          reset score
        </ButtonComponent>
      </div>
      <div className="border-bottom border-dark">
        <h3>Guess the color?</h3>
        {isHex ? (
          <h3>hex: {trueColor}</h3>
        ) : (
          <h3>rgb: {hexToRgb(trueColor)}</h3>
        )}
        <ButtonComponent
          onClick={() => props.onColorToggler()}
          color="primary"
          className="my-3"
        >
          {isHex ? 'convert to RGB' : 'convert to HEX'}
        </ButtonComponent>
      </div>

      <div className="border-bottom border-dark my-3">
        <div className="d-flex justify-content-between border-bottom border-dark pb-3">
          {props.lvlButton.map(x => (
            <Button
              onClick={() => props.onLvlHandler(x * 3)}
              color="success"
              className="mx-1"
            >
              lvl {x}
            </Button>
          ))}

          <ButtonComponent
            onClick={() => props.onResetHandler()}
            color="danger"
          >
            RESET LVL
          </ButtonComponent>
        </div>

        <div className="overflow-auto my-3" style={{ maxHeight: '20vh' }}>
          <h5>Custom levels:</h5>
          {customLvl.map(x => (
            <Button
              onClick={() => props.onLvlHandler(x.lvlNumBoxes)}
              color="success"
              className="m-2"
            >
              {x.lvlName}
            </Button>
          ))}
        </div>

        <form onSubmit={e => props.onFormSubmissionHandler(e)}>
          <InputGroup className="my-2">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>add custom lvl name:</InputGroupText>
            </InputGroupAddon>
            <Input
              type="text"
              name="lvl name"
              value={customLvlName}
              onChange={e => props.onCustomLvlNameHandler(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="my-2">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>add number of boxes:</InputGroupText>
            </InputGroupAddon>
            <Input
              type="number"
              name="lvls"
              value={customLvlBoxes}
              onChange={e => props.onCustomLvlHandler(e.target.value)}
            />
          </InputGroup>

          <Button type="submit" color="success" className="m-2">
            add custom lvl
          </Button>
        </form>
        <Button
          onClick={() => props.onDeleteCustomLvlsHandler()}
          type="btn"
          color="danger"
          className="m-2"
        >
          delete custom levels
        </Button>
      </div>
    </div>
  );
};

export default ColorGameControls;
