const game = () => {
    let pScore = 0;
    let cScore = 0;

    //start game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            matchScreen.classList.add('fadeIn');
        });
    };

    //play match
    const playmatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = '';
            });
        });

        //computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(options => {
            options.addEventListener('click', function () {
                //computer Number
                const computerNumber = Math.floor(Math.random() * 3);

                //Computer choice
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() =>{
                    //Call Comapre Hands
                    compareHands(this.textContent, computerChoice);


                    //Update images
                    playerHand.src = `/assets/${this.textContent}.png`;
                    computerHand.src = `/assets/${computerChoice}.png`;
                }, 2000);

                //Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    //update text
    const winner = document.querySelector('.winner');

    const compareHands = (playerChoice, computerChoice) => {


        //Tie    
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie';
            return;
        }
        //Rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        //Paper
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie';
            return;
        }
        //Rock
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
        //Scissors
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie';
            return;
        }
        //Rock
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            } else {
                winnder.textContent = 'Computer Wins';
                pScore++;
                updateScore();
                return;
            }
        }
    }


    //call inner functions
    startGame();
    playmatch();
};

game();