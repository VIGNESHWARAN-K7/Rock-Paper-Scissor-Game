
const stGame=()=>{
    const gameSt=confirm("shall we play rock paper scissor");
    gameSt?playGame():alert( "don't fear kid i'll give you a chance to beat me.. :)");
}
    const playGame=()=>{
        while(true){
            let playerChoise=getPlayerChoise();
            playerChoise=formatPlayerchoise(playerChoise);
            if(playerChoise===""){
                invalidChoise();
                continue;
            }
            if(!playerChoise){
                decidedNottoPlay();
                break;

            }
            playerChoise=evaluatePlayerChoise(playerChoise);
            if(!playerChoise){
                invalidChoise();
                continue;
            }
            const computerChoise=getComputerChoise();
            const result=determineWinner(playerChoise,computerChoise);
            displayResult(result);
            if(askToPlayAgain()){
                continue;

            }
            else{
                thanksForPlaying();
                break;
            }
        }
};
const getPlayerChoise=()=>{
    return prompt("pls enter rock paper or scissor...");
};

const formatPlayerchoise=(playerChoise)=>{
    if(playerChoise || playerChoise===""){
        return playerChoise.trim().toLowerCase();
    }
    else{
        return false;
    }
}
const decidedNottoPlay=()=>{
    return alert("don't change your mind kid (:")
}

const evaluatePlayerChoise=(playerChoise)=>{
    if(
        playerChoise==="rock"||
        playerChoise==="paper"||
        playerChoise==="scissor"
    ){
        return playerChoise;
    }
    else{
        return false;

    }
};
const invalidChoise=()=>{
     return alert(" hey kid you don't enter enter rock, paper,or scissor in correct format:)");

};
const getComputerChoise=()=>{
    const randomNumber=Math.floor(Math.random()*3)

    const rpsArray=["rock","paper","scissor"];
    return rpsArray[randomNumber];

};

const determineWinner=(player,computer)=>{

    const winner=
        player==computer
        ?"TIE GAME..we're same mind (:"
        :player==="rock" && computer==="paper"
        ?`your choise: ${player}\nMy choise: ${computer}\nI already know you can't beat me (: you lose! BAKA`
        :player==="paper" && computer==="scissor"
        ?`Your Choise: ${player}\nMy Choise: ${computer}\nI already know you can't beat me (: you lose! BAKA`
        :player==="scissor" &&computer==="rock"
        ?`Your Choise: ${player}\nMy Choise: ${computer}\nI already know you can't beat me (: you lose! BAKA`
        :`Your Choise: ${player}\nMy Choise: ${computer}\n You're lucky :) you won this match.. have a nice day kid  :( !`

        return winner

};

const displayResult=(result)=>{
    alert (result);
};

const askToPlayAgain=()=>{
    return confirm("play again..?");
};

const thanksForPlaying=()=>{
    alert("ok ,thanks for playing..");
}
stGame();
