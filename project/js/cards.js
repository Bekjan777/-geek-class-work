const cards = document.querySelector(".cards")

const toMakeCard = (title, body) => {
    cards.innerHTML += `
    <div class="card"> 
        <img src="https://ir.ozone.ru/s3/multimedia-z/c1000/6011728655.jpg" alt="love you">
        <span id="title">
            ${title}
        </span>        
        <span id="body">
            ${body}
        </span>
    </div>
    `
}

const toGetInfo = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        data.forEach(item => {
            toMakeCard(item.title, item.body)

        })

    }
    catch (error){
        console.error('ERROR')
    }
}



toGetInfo()

//tic tac toe

document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('#board');
    const cells = document.querySelectorAll('.cell');
    const message = document.querySelector('#message');
    const resetButton = document.querySelector('#reset');
    let currentPlayer = 'X';
    let gameActive = true;
    let gameState = ['', '', '', '', '', '', '', '', ''];

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const handleCellPlayed = (clickedCell, clickedCellIndex) => {
        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.textContent = currentPlayer;
    };

    const handlePlayerChange = () => {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        message.textContent = `It's ${currentPlayer}'s turn`;
    };

    const handleResultValidation = () => {
        let roundWon = false;
        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            message.textContent = `Player ${currentPlayer} has won!`;
            gameActive = false;
            return;
        }

        const roundDraw = !gameState.includes('');
        if (roundDraw) {
            message.textContent = 'Game ended in a draw!';
            gameActive = false;
            return;
        }

        handlePlayerChange();
    };

    const handleCellClick = (event) => {
        const clickedCell = event.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

        if (gameState[clickedCellIndex] !== '' || !gameActive) {
            return;
        }

        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();
    };

    const handleRestartGame = () => {
        currentPlayer = 'X';
        gameActive = true;
        gameState = ['', '', '', '', '', '', '', '', ''];
        message.textContent = `It's ${currentPlayer}'s turn`;
        cells.forEach(cell => cell.textContent = '');
    };

    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    resetButton.addEventListener('click', handleRestartGame);

    message.textContent = `It's ${currentPlayer}'s turn`;
});
