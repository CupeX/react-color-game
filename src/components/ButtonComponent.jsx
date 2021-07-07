import { Button } from 'reactstrap'

const ButtonComponent = props => (
  <Button
    color={props.color}
    onClick={() => props.onClick()}
    className={props.className}
  >
    {props.children}
  </Button>
)

export default ButtonComponent
