let score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    };

    updateScoreElement();

    /*if(score === null){
      score={
        wins:0,
        losses:0,
        ties:0
      };
    }
    */

    function pickcomputermove() {
      const randomnumber = Math.random();
      let computermove = '';
      if (randomnumber >= 0 && randomnumber < 1 / 3) {
        computermove = 'ROCK';
      }
      else if (randomnumber >= 1 / 3 && randomnumber < 2 / 3) {
        computermove = 'PAPER';
      }
      else if (randomnumber >= 2 / 3 && randomnumber <= 1) {
        computermove = 'SCISSORS';
      }
      return computermove;
    }


    function playgame(playermove) {
      const computermove = pickcomputermove();
      let result = '';
      if (playermove === 'ROCK') {
        if (computermove === 'ROCK') {
          result = 'its a tie';
        }
        else if (computermove === 'PAPER') {
          result = 'you lose';
        }
        else if (computermove === 'SCISSORS') {
          result = 'you win';
        }
      }
      else if (playermove === 'PAPER') {
        if (computermove === 'ROCK') {
          result = 'you win';
        }
        else if (computermove === 'PAPER') {
          result = 'its a tie';
        }
        else if (computermove === 'SCISSORS') {
          result = 'you lose';
        }
      }
      else if (playermove === 'SCISSORS') {
        if (computermove === 'ROCK') {
          result = 'you lose';
        }
        else if (computermove === 'PAPER') {
          result = 'you win';
        }
        else if (computermove === 'SCISSORS') {
          result = 'its a tie';
        }
      }

      if (result === 'you win') {
        score.wins += 1;
      }
      else if (result == 'you lose') {
        score.losses += 1;
      }
      else if (result == 'its a tie') {
        score.ties += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();

      document.querySelector('.js-result').innerHTML = result;

      document.querySelector('.js-moves').innerHTML = `you ${playermove} - ${computermove} computer`;


      function updateScoreElement() {
        document.querySelector('.js-score').innerHTML = `wins: ${score.wins},losses: ${score.losses}, ties:${score.ties}`;
      }


      }