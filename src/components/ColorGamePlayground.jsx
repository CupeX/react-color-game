import { nanoid } from 'nanoid'

const ColorGamePlayground = props => {
  return (
    <div className='d-flex flex-wrap justify-content-center align-items-center overflow-auto col-8 vh-100 p-3'>
      <div className='d-flex flex-wrap justify-content-between align-items-center overflow-auto'>
        {props.background.map(x => (
          <div key={nanoid()} className=''>
            <button
              className='p-5 m-1'
              style={{ background: x }}
              onClick={() => props.onCheckColor(x)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorGamePlayground
