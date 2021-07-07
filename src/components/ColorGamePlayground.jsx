import { nanoid } from 'nanoid'

const ColorGamePlayground = props => {
  const customWidth = () => {
    // if (props.boxes < 19) {
    //   return 'col-6';
    // } else if (props.boxes >= 19 && props.boxes < 31) {
    //   return 'col-8';
    // } else if (props.boxes >= 31 && props.boxes < 37) {
    //   return 'col-10';
    // } else {
    //   return 'col-12';
    // }
  }

  return (
    <div className='d-flex flex-wrap justify-content-center align-items-center overflow-auto col-8 vh-100 p-3'>
      <div
        className={`d-flex flex-wrap justify-content-between align-items-center overflow-auto ${customWidth()}`}
      >
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
