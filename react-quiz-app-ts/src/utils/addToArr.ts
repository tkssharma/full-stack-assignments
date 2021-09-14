const addToArr = (arr: string[], str: string): string[] => {
  const randomArr: string[] = arr.concat(str);
  return shuffle(randomArr);
};

// From stack overflow to shuffle the array
const shuffle = (arr: string[]) => {
  var currentIndex = arr.length,
    randomIndex: number;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
};

export default addToArr;
