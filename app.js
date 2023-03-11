const game = () => {
    let pScore = 0;
    let cScore = 0;
    
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeout");
            match.classList.add("fadeIn");
        });
    };
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerhand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationed', function(){
                this.style.animation = '';
            });
        });
        //computer options
        const computeroptions = ['rock', 'paper', 'scissors'];

        options.forEach(option=>{
            option.addEventListener('click', function(){
                //computer choice
                const computernumber = Math.floor(math.random() *3);
                const computerchoice = computerOptions[ComputerNumber];
                
                setTimeout(() => {
                    //here is were we all compare hands
                comparehands(this.textcontext, computerchoice);

                //update images
                playerhand.src = './assets/${this.textcontent}.png';
                computerHand.src = './assets/${computerChoice}.png';
                }, 2000);

                //animation
                playerhand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "computerPlayer 2s ease";
            });
        });
      };

    const updateScore = () =>{
        constplayerscore = document.querySelector('.player-score');
        constplayerscore = document.querySelector('.computer-score');
        playerscore.textContent = pScore
        computerscore.textcontent = cScore
    }

    const compareHands = (playerchoice, computerChoice) =>{
         //update text
    const winner = document.querySelector('.winner');
    //checking for a tie
    if(playerchoice=== computerChoice) {
        winner.textContent = 'it is a tie';
        return;
    }
    }
    //check for rock
    if (playerchoice=== 'rock') {
        if(computerChoice === scissors){
            winner.textcontent = 'player wins';
            pScore++;
            updateScore();
            return;
        }else{
            winner.textContent= 'computer wins';
            cScore++;
            updateScore();
            return;
        }
     }
     //check for paper
     if(playerchoice === 'paper'){
        if(computerChoice === 'scissors')
             winner.textContent = 'computer wins';
             cScore++;
             updateScore();
             return;
        }else{
        winner.textContent = 'player wins';
        pScore++;
        updateScore();
        return;
        }
    }
    //check for scissors 
    if(playerchoice === 'scissors'){
        if(computerChoice === 'rock'){
            winner.textcontent = 'computer wins';
            cScore++;
            updateScore();
            return;
        }else{
            winner.textContent = 'player wins';
            pScore++;
            updateScore();
            return;
        }
    }


    

    
   

    //Is call all the inner function
    startGame();
    playMatch();



//start the game function 
game();

