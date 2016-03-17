var image = {
  'A': 'http://i.imgur.com/V4KiqvY.jpg',
  'A-': 'http://i.imgur.com/BQVyoyR.jpg',
  'B+': 'http://i.imgur.com/A1zK8HP.jpg',
  'B': 'http://i.imgur.com/8M4rEmC.jpg',
  'B-': 'http://i.imgur.com/3PBCdDk.jpg',
  'C+': 'http://i.imgur.com/9Z5Sk4Z.jpg',
  'C': 'http://i.imgur.com/UczWxkF.jpg',
  'C-': 'http://i.imgur.com/L3v5Q8x.jpg',
  'D+': 'http://i.imgur.com/tryBV2Z.jpg',
  'D': 'http://i.imgur.com/zyzWZkv.jpg',
  'D-': 'http://i.imgur.com/G7bepEb.jpg',
  'F': 'http://i.imgur.com/OZ0l6SM.jpg'
};

function getImage(grade) {
  return image[grade];
}

module.exports = getImage;
