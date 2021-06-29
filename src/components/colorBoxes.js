import './index.css';

const ColorBoxes = props => {
  const background = props.background;
  const fake = props.fake;
  const trueColor = props.true;
  const orderNumber = props.number;

  const colorChecker = (x, y) => {
    if (orderNumber === +trueColor) {
      alert('you get it!');
    } else {
      alert('wrong!');
    }
  };

  const trueContent = () => {
    if (orderNumber === +trueColor) {
      return <span>{background}</span>;
    } else {
      return <span>{fake}</span>;
    }
  };

  return (
    <div className="box-container">
      <button
        className="box"
        style={{ background: background }}
        onClick={() => colorChecker(background)}
      ></button>
      <span>{trueContent()}</span>
    </div>
  );
};

export default ColorBoxes;
