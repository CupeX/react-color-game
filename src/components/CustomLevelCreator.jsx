import {
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from 'reactstrap'
import useCreateCustomLvl from '../hooks/useCreateCustomLvl'

const CustomLevelCreator = () => {
  const {
    customLvlName,
    customLvlBoxes,
    customLvlNameHandler,
    customLvlBoxesHandler,
    deleteCustomLvlsHandler,
    formSubmissionHandler
  } = useCreateCustomLvl()
 
  return (
    <div>
      <form onSubmit={e => formSubmissionHandler(e)}>
        <InputGroup className='my-2'>
          <InputGroupAddon addonType='prepend'>
            <InputGroupText>add custom lvl name:</InputGroupText>
          </InputGroupAddon>
          <Input
            type='text'
            name='lvl name'
            value={customLvlName}
            onChange={e => customLvlNameHandler(e.target.value)}
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
            onChange={e => customLvlBoxesHandler(e.target.value)}
          />
        </InputGroup>

        <Button type='submit' color='success' className='m-2'>
          add custom lvl
        </Button>

      </form>
        <Button
          onClick={() => deleteCustomLvlsHandler()}
          type='btn'
          color='danger'
          className='m-2'
        >
          delete custom levels
        </Button>
    </div>
  )
}

export default CustomLevelCreator
