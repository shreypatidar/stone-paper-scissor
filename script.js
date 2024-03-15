// let rock= document.querySelector(".stone");
// let paper= document.querySelector(".paper");
// let scisor= document.querySelector(".scisor");
let choices =document.querySelectorAll(".choice");
let button =document.querySelector(".newgame");
let playerscore=0;
let compscore=0;

let msg=document.querySelector(".draw");

const drawgame=()=>{
    console.log("game is draw");
};

const computerchoice =()=>{
    const option =["rock", "paper","scisor"];

    let number =Math.floor(Math.random()*3);
    return option[number];    
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        let  playerchoice =choice.getAttribute("id");
        playgame(playerchoice);
    });
});

let pscore = document.querySelector("#player-score");
let cscore = document.querySelector("#comp-score");
const showwinner=(playerwin)=>{
    if(playerwin){
        
        playerscore ++;
        pscore.innerText=`${playerscore}`;
        console.log("winner is player");
        msg.innerText="";
    }
    else{
        compscore++;
       cscore.innerText=`${compscore}`;
        console.log("winner is computer");
        msg.innerText="";
    }
};

const playgame=(playerchoice) =>{
    msg.innerText="";
    console.log("playerchoice = ",playerchoice);
    let comp = computerchoice();
    console.log("computer choice= ", comp);

    if(playerchoice === comp){
        drawgame();
        msg.innerText="Opps it's draw !!";
    }
    else{
        let playerwin=true;
        if(playerchoice ==="rock"){
            playerwin=comp ==="paper" ? false:true;
        }
        else if(playerchoice === "paper"){
            playerwin = comp ==="scisor" ? false:true;
        }
        else{
            playerwin = comp ==="rock" ? false:true;
        }
        showwinner(playerwin);
    }
};

button.addEventListener("click", ()=>{
    pscore.innerText="0";
    cscore.innerText="0";
    msg.innerText="";
});



