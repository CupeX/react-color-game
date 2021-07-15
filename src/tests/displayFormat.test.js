const DisplayFormat = require('../components/DisplayFormat')

test('check if color format is correct - HEX', () => {
  console.log(typeof DisplayFormat)
  expect(DisplayFormat('#000000', 'hex')).toEqual('#000000')
})
