const RadioBtns = prop => {
  return (
    <div onChange={e => prop.onChange(e.target.value)}>
      <div className='form-check form-check-inline'>
        <label className='form-check-label' htmlFor='hex'>
          HEX
          <input
            className='form-check-input'
            id='hex'
            type='radio'
            value='hex'
            name='color'
          />
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <label className='form-check-label' htmlFor='rgb'>
          RGB
          <input
            className='form-check-input'
            id='rgb'
            type='radio'
            value='rgb'
            name='color'
          />
        </label>
      </div>

      <div className='form-check form-check-inline'>
        <label className='form-check-label' htmlFor='hsl'>
          HSL
          <input
            className='form-check-input'
            id='hsl'
            type='radio'
            value='hsl'
            name='color'
          />
        </label>
      </div>
    </div>
  )
}

export default RadioBtns
