const hexToRgb = (x, y) => {
  const newArray = [];
  const isLoaded = y;

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
  ];
  if (isLoaded) {
    const cutter = x.substring(1).match(/.{1,2}/g);
    for (let i = 0; i < cutter.length; i++) {
      const value1 = hexBase.indexOf(cutter[i][0]) * 16;
      const value2 = hexBase.indexOf(cutter[i][1]);
      const result = value1 + value2 + ', ';
      newArray.push(result);
    }
  }
  return newArray;
};

export default hexToRgb;
