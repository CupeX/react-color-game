import { nanoid } from '@reduxjs/toolkit'

const hexToRgb = x => {
  const cutter = x.substring(1).match(/.{1,2}/g)
  const newArray = []

  const hexBase = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ]

  for (let i = 0; i < cutter.length; i++) {
    const value1 = hexBase.indexOf(cutter[i][0]) * 16
    const value2 = hexBase.indexOf(cutter[i][1])
    const result = value1 + value2
    newArray.push(result)
  }

  const rgb = (
    <div>
      {newArray.map(x => (
        <h2 key={nanoid()} style={{ display: 'inline' }}>
          {x},
        </h2>
      ))}
    </div>
  )

  return { rgb, rgbArr: newArray }
}

export default hexToRgb
