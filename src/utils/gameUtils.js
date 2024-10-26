export function getSide() {
  const playerSide = Math.random() < 0.5 ? "O" : "X";
  const botSide = playerSide == "X" ? "O" : "X";
  return { player: playerSide, bot: botSide };
}

export function getRandomIndex() {
  return Math.floor(Math.random() * 9);
}

export function checkWinner(board) {
  const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winCondition.length; i++) {
    const [a, b, c] = winCondition[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return board.includes('') ? null : "draw";
}

function minimax(board, depth, isMaximizing, HUMAN, AI) {
  const winner = checkWinner(board);
  if (winner === AI) return 10 - depth;
  if (winner === HUMAN) return depth - 10;
  if (winner === "draw") return 0;

  if (isMaximizing) {
    let maxScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        board[i] = AI;
        const score = minimax(board, depth + 1, false);
        board[i] = "";
        maxScore = Math.max(maxScore, score);
      }
    }
    return maxScore;
  } else {
    let minScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        board[i] = HUMAN;
        const score = minimax(board, depth + 1, true);
        board[i] = "";
        minScore = Math.min(minScore, score);
      }
    }
    return minScore;
  }
}

export function findBestMove(board, HUMAN, AI) {
  
  let bestScore = -Infinity;
  let move;
  for (let i = 0; i < board.length; i++) {
    if (board[i] === '') {
      board[i] = AI;
      const score = minimax(board, 0, false, HUMAN, AI);
      board[i] = '';
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  if (move === undefined) {
    move = board.findIndex(cell => cell === '');
  }
  return move;
}
