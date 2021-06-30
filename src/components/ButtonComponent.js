import { Button } from 'reactstrap';

const ButtonComponent = props => {
  return (
    <Button color={props.color} onClick={() => props.onClick()}>
      {props.children}
    </Button>
  );
};

export default ButtonComponent;
