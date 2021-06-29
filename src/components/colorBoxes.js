import './index.css';

const ColorBoxes = props => {
  const background = props.background;
  const fake = props.fake;

  const colorChecker = (x, y) => {
    console.log(x, y);
    if (typeof x == 'undefined') {
      alert('you get it!');
    } else {
      alert('wrong!');
    }
  };

  return (
    <div className="box-container">
      <button
        className="box"
        style={{ background: background }}
        onClick={() => colorChecker(fake, background)}
      ></button>
      <span>{fake ? fake : background}</span>
      <span>{background}</span>
    </div>
  );
};

export default ColorBoxes;
