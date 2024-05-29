import { useEffect, useState } from 'react';

export default function Cards() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setCards(data); // Limiting to first 10 posts for simplicity
            } catch (error) {
                console.error('ERROR', error);
            }
        };

        fetchCards();
    }, []);
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [gameState, setGameState] = useState(Array(9).fill(''));
    const [message, setMessage] = useState(`It's ${currentPlayer}'s turn`);
    const [gameActive, setGameActive] = useState(true);

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

    const handleCellClick = (index) => {
        if (gameState[index] !== '' || !gameActive) return;

        const newGameState = [...gameState];
        newGameState[index] = currentPlayer;
        setGameState(newGameState);

        const roundWon = winningConditions.some(condition => {
            const [a, b, c] = condition;
            return newGameState[a] && newGameState[a] === newGameState[b] && newGameState[a] === newGameState[c];
        });

        if (roundWon) {
            setMessage(`Player ${currentPlayer} has won!`);
            setGameActive(false);
            return;
        }

        if (!newGameState.includes('')) {
            setMessage('Game ended in a draw!');
            setGameActive(false);
            return;
        }

        const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
        setCurrentPlayer(nextPlayer);
        setMessage(`It's ${nextPlayer}'s turn`);
    };

    const handleRestartGame = () => {
        setCurrentPlayer('X');
        setGameState(Array(9).fill(''));
        setMessage(`It's X's turn`);
        setGameActive(true);
    };

    return (
        <>
            <div className="game-container">
                <h1>Tic-Tac-Toe</h1>
                <div id="board" className="board">
                    {gameState.map((cell, index) => (
                        <div
                            key={index}
                            className="cell"
                            data-index={index}
                            onClick={() => handleCellClick(index)}
                        >
                            {cell}
                        </div>
                    ))}
                </div>
                <button id="reset" onClick={handleRestartGame}>Reset</button>
                <p id="message">{message}</p>
            </div>
            <div className="cards">
                {cards.map((card) => (
                    <div className="card" key={card.id}>
                        <img src="https://ir.ozone.ru/s3/multimedia-z/c1000/6011728655.jpg" alt="love you" />
                        <span id="title">{card.title}</span>
                        <span id="body">{card.body}</span>
                    </div>
                ))}
            </div>
        </>
    );
}
