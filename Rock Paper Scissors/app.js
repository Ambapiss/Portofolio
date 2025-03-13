document.addEventListener('DOMContentLoaded', () => {
    const startGameButton = document.getElementById('start-game');
    const match = document.querySelector('.match');
    const intro = document.querySelector('.intro');
    const options = document.querySelectorAll('.option');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const winnerText = document.querySelector('.winner');
    const playerScoreText = document.getElementById('player-score');
    const computerScoreText = document.getElementById('computer-score');

    let playerScore = 0;
    let computerScore = 0;

    startGameButton.addEventListener('click', () => {
        intro.classList.add('fadeOut');
        match.classList.add('fadeIn');
    });

    options.forEach(option => {
        option.addEventListener('click', function() {
            const playerChoice = this.dataset.choice;
            const computerChoice = getComputerChoice();
            const winner = getWinner(playerChoice, computerChoice);

            updateHands(playerChoice, computerChoice);
            updateScore(winner);
            updateWinnerText(winner);
        });
    });

    function getComputerChoice() {
        const choices = ['batu', 'kertas', 'gunting'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function getWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'draw';
        }
        if (
            (playerChoice === 'batu' && computerChoice === 'gunting') ||
            (playerChoice === 'kertas' && computerChoice === 'batu') ||
            (playerChoice === 'gunting' && computerChoice === 'kertas')
        ) {
            return 'player';
        } else {
            return 'computer';
        }
    }

    function updateHands(playerChoice, computerChoice) {
        playerHand.src = `assets/${playerChoice}.png`;
        computerHand.src = `assets/${computerChoice}.png`;
    }

    function updateScore(winner) {
        if (winner === 'player') {
            playerScore++;
            playerScoreText.textContent = playerScore;
        } else if (winner === 'computer') {
            computerScore++;
            computerScoreText.textContent = computerScore;
        }
    }

    function updateWinnerText(winner) {
        if (winner === 'player') {
            winnerText.textContent = 'Pemain Menang!';
        } else if (winner === 'computer') {
            winnerText.textContent = 'Komputer Menang!';
        } else {
            winnerText.textContent = 'Seri!';
        }
    }
});
