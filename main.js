document.querySelector('.rockSec')
.addEventListener('click', () => {
    play('rock');
});

document.querySelector('.paperSec')
.addEventListener('click', () => {
    play('paper');
});

document.querySelector('.scissorSec')
.addEventListener('click', () => {
    play('scissor');
});



function play(playermove){
    let score = '';
    const computermove = computerPick();


    if(playermove === 'rock'){
        if(computermove === 'rock'){
            score = 'tie';
        } else if(computermove === 'paper'){
            score = "lose";
        } else if(computermove === 'scissor'){
            score = "win";
        }
        alert(score);
    }else if(playermove === 'paper'){
        if(computermove === 'rock'){
            score = "win";
        } else if(computermove === 'paper'){
            score = "tie";
        } else if(computermove === 'scissor'){
            score = "lose";
        }
        alert(score);
        
    } else if(playermove === 'scissor'){
        if(computermove === 'rock'){
            score = "lose";
        } else if(computermove === 'paper'){
            score = "win";
        } else if(computermove === 'scissor'){
            score = "tie";
        }
        alert(score);
        
    }

    document.querySelector('.result').innerHTML = score; 


    document.querySelector(".move").innerHTML = `You
    <img src="${playermove}-emoji.png" class="rock">
    <img src="${computermove}-emoji.png" class="rock">
    Computer`;

    document.querySelector().innerHTML = ``;
   
    function scoreBoard(){
        let winScore = 0;
        let loseScore = 0;
        let tieScore = 0;
        if(score === "win"){
             winScore = winscore + 1 ;
            document.querySelector(".winScore").innerHTML = `<p>${winScore}</p>` ;
        }
        else if(score === "win"){
            loseScore = loseScore + 1 ;
           document.querySelector(".loseScore").innerHTML = `<p>${loseScore}</p>` ;
       }
       else if(score === "win"){
        tieScore = tieScore + 1 ;
       document.querySelector(".tieScore").innerHTML = `<p>${tieScore}</p>` ;
       }
    
    }
}

function computerPick(){
    const pcChoice = Math.random();
    let computermove = '';

    if(pcChoice >=0 && pcChoice < 1/3){
        computermove = 'rock';
    }if(pcChoice >=1/3 && pcChoice < 2/3){
        computermove = 'paper';
    }if(pcChoice >=2/3 && pcChoice < 3/3){
        computermove = 'scissor';
    }

    return computermove;

}
