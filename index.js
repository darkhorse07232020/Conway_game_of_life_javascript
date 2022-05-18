function generateNewState(currentState, rCount, cCount) {
  let nextState = new Array(rCount);

  for (let i = 0; i < rCount; i++) {
    nextState[i] = new Array(cCount).fill(0);
  }

  for (let rIndex = 0; rIndex < rCount; rIndex++) {
    for (let cIndex = 0; cIndex < cCount; cIndex++) {

      let aliveNeighbors = 0;
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if ((rIndex + dr >= 0 && rIndex + dr < rCount) && (cIndex + dc >= 0 && cIndex + dc < cCount)) {
            aliveNeighbors += currentState[rIndex + dr][cIndex + dc];
          }
        }
      }

      aliveNeighbors -= currentState[rIndex][cIndex];

      if ((currentState[rIndex][cIndex] == 1) && (aliveNeighbors < 2))
        nextState[rIndex][cIndex] = 0;
      else if ((currentState[rIndex][cIndex] == 1) && (aliveNeighbors > 3))
        nextState[rIndex][cIndex] = 0;
      else if ((currentState[rIndex][cIndex] == 0) && (aliveNeighbors == 3))
        nextState[rIndex][cIndex] = 1;
      else
        nextState[rIndex][cIndex] = currentState[rIndex][cIndex];
    }
  }

  return nextState;
}

function arrayToBoard(arr) {
  let currentBoard = "";
  arr.forEach(item => {
    item.forEach(cell => {
      currentBoard += cell === 0 ? "." : "*";
    });
    currentBoard += "\n";
  });
  return currentBoard;
}

const rCount = 10, cCount = 10;

const currentState = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

console.log("--- Current State ---");
console.log(arrayToBoard(currentState));

console.log("--- New State ---");
console.log(arrayToBoard(generateNewState(currentState, rCount, cCount)));
