import {
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from 'reactstrap'

const FormComponent = prop => {
  const { customLvlBoxes, customLvlName, onChangeName, onChangeLvl, onSubmit } =
    prop

  return (
    <div>
      <form onSubmit={e => onSubmit(e)}>
        <InputGroup className='my-2'>
          <InputGroupAddon addonType='prepend'>
            <InputGroupText>add custom lvl name:</InputGroupText>
          </InputGroupAddon>
          <Input
            type='text'
            name='lvl name'
            value={customLvlName}
            onChange={e => onChangeName(e.target.value)}
          />
        </InputGroup>
        <InputGroup className='my-2'>
          <InputGroupAddon addonType='prepend'>
            <InputGroupText>add number of boxes:</InputGroupText>
          </InputGroupAddon>
          <Input
            type='number'
            name='lvls'
            value={customLvlBoxes}
            onChange={e => onChangeLvl(e.target.value)}
          />
        </InputGroup>

        <Button type='submit' color='success' className='m-2'>
          add custom lvl
        </Button>
      </form>
    </div>
  )
}

export default FormComponent
