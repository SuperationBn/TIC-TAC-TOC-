// SuperationBn
const cellAll = document.querySelectorAll('.cell');
const showResul = document.getElementById('showResult');
const resetBtn = document.getElementById('btn_reset');

const arrDimentionCell = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

let positionCell = ['', '', '', '', '', '', '', '', ''];
let curenPlayer = 'X';
let runinng = false;

function inicialJuego() {
  cellAll.forEach(cell => cell.addEventListener('click', cellClicked));
  resetBtn.addEventListener('click', resetGame);
  showResul.innerHTML = `${curenPlayer}'s turn`;
  runinng = true;
}

inicialJuego();

//----------------------------------
function cellClicked() {
  const cellIndice = this.getAttribute('cellIndex');
  if (positionCell[cellIndice] !== '' || !runinng) {
    return;
  }
  updateCell(this, cellIndice);
  checkWiner()
}

function updateCell(cell, index) {
  positionCell[index] = curenPlayer;
  cell.textContent = curenPlayer;
}

function cambiarJugador() {
  curenPlayer = (curenPlayer === 'X') ? 'O' : 'X';
  return showResul.innerHTML = `${curenPlayer}'s turn`
}

function checkWiner() {
  let randonWon = false;

  for (let i = 0; i < arrDimentionCell.length; i++) {
    const consicion = arrDimentionCell[i];
    const cellA = positionCell[consicion[0]];
    const cellB = positionCell[consicion[1]];
    const cellC = positionCell[consicion[2]];

    if (cellA == '' || cellB == '' || cellC == '') {
      continue;
    }
    if (cellA === cellB && cellB === cellC) {
      randonWon = true;
      break;
    }
  }

  if (randonWon) {
    showResul.innerHTML = `${curenPlayer} WIN`;
    runinng = false;

  } else if (!positionCell.includes('')) {
    showResul.innerHTML = `EMPATE`;
    runinng = false;

  } else {
    cambiarJugador();
  }

}
function resetGame() {
  curenPlayer = 'X';
  positionCell = ['', '', '', '', '', '', '', '', ''];
  showResul.innerHTML = `${curenPlayer}'s turn`;
  cellAll.forEach(cell => cell.innerHTML = '');
  runinng = true;
}
//----------------------------------
//SuperationBn