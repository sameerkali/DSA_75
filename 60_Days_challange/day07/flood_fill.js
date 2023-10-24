const floodFill = (image, sr, sc, color) => {
  const original = image[sr][sc];

  const recurse = (image, sr, sc) => {
    if (
      sr < 0 ||
      sr > image.length - 1 ||
      sc < 0 ||
      sc > image[0].length - 1 ||
      image[sr][sc] !== original ||
      image[sr][sc] === color
    )
      return image;

    image[sr][sc] = color;

    recurse(image, sr + 1, sc);
    recurse(image, sr - 1, sc);
    recurse(image, sr, sc + 1);
    recurse(image, sr, sc - 1);

    return image;
  };
  return recurse(image, sr, sc);
};


let image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2

console.log(floodFill(image, sr, sc, color))