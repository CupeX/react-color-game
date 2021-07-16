import { nanoid } from 'nanoid'
import useCheckRightColor from '../hooks/useCheckRightColor'
import useGameInProgress from '../hooks/useGameInProgress'

const ColorGamePlayground = () => {
  const {colors} = useGameInProgress()  
  const {checkColor} = useCheckRightColor() 

  const colorCheckHandler = x => {
    checkColor(x)
  }

  return (
    <div className='d-flex flex-wrap justify-content-center align-items-center overflow-auto col-8 vh-100 p-3'>
      <div className='d-flex flex-wrap justify-content-between align-items-center overflow-auto'>
        {colors.map(x => (
          <div key={nanoid()} className=''>
            <button
              className='p-5 m-1'
              style={{ background: x }}
              onClick={() => colorCheckHandler(x)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorGamePlayground
