function getComputerChoice(){
    let choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random()*3)];
}


let HSCore = 0;
let CScore = 0;
let rounds = 0;
let prevChoice = ["", ""];



function changeColour(colour, parentClass, choice){
    let doc = document.querySelector(parentClass+"> .IconRPS > ."+choice);
    doc.querySelector("button").style.backgroundColor = colour;
    doc.querySelector("button>img").style.backgroundColor = colour;
}


function playGame(choice){
    if(prevChoice[0].length != 0)
    {
        changeColour("white", ".human", prevChoice[0]);
        changeColour("white", ".computer", prevChoice[1]);
    }

    let humanChoice = choice;
    prevChoice[0] = humanChoice;
    changeColour("rgb(179, 179, 255)", ".human", prevChoice[0]);

    let CompChoice = getComputerChoice();
    prevChoice[1] = CompChoice;
    changeColour("rgb(243, 84, 84)", ".computer", prevChoice[1]);

    CompChoice = CompChoice.charAt(0);
    humanChoice = humanChoice.charAt(0);

    var choices = {'r':"Rock", 'p':"Paper", 's':"Scissors"};

    if(humanChoice != CompChoice)
    {
        if((humanChoice == 'r' && CompChoice == 's') || (humanChoice == 'p' && CompChoice == 'r') || (humanChoice == 's' && CompChoice == 'p'))
        {
            message("Human wins this round! "+choices[humanChoice]+" beats " + choices[CompChoice]+".");
            HSCore++;
            document.getElementById("HCount").innerHTML = "Score : "+HSCore;
        } 

        else
        {
            message("Computer wins this round! "+choices[CompChoice]+" beats " + choices[humanChoice]+".");
            CScore++;
            document.getElementById("CCount").innerHTML = "Score : "+CScore;
        }
    }

    else
        message("Tie!");

    rounds++;
    winner();
}


function message(text){
    document.getElementById("message").innerHTML = text;
}


function winner(){
    if(rounds == 5)
    {
        changeHTML()
        changeColour("white", ".human", prevChoice[0]);
        changeColour("white", ".computer", prevChoice[1]);

        if(HSCore > CScore)
        {
            message("Game Ends! Human Wins this Game. ");
            document.querySelector(".cards>.human").style.border = "solid rgb(179, 179, 255) 3px";
        }
            
        
        if(CScore > HSCore)
        {
            message("Game Ends! Computer Wins this Game. ");
            document.querySelector(".cards>.computer").style.border = "solid rgb(243, 84, 84) 3px";
        }

        if(CScore == HSCore)
            message("Game Ends! It's a tie. ");
        
    }
}


function changeHTML(){
    document.querySelector(".restart").innerHTML = `<h3>Restart</h3>
                                                <button onclick = "restart()">Restart</button>`;

    var styling = document.querySelector(".restart");
    styling.style.padding = "15px";
    styling.style.paddingLeft = "30px";
    styling.style.paddingRight = "30px";
    styling.style.backgroundColor = "rgb(114, 224, 114)";

    var btns = document.getElementsByTagName("button");

    for(i=0; i<btns.length-1; i++)
        btns[i].disabled = true;

    var IconBtns = document.querySelector("#RPS");

    for(i=0; i<=2; i++)
        IconBtns.children[i].removeAttribute("onclick");

}


function restart(){
    HSCore = 0;
    CScore = 0;
    rounds = 0;
    prevChoice[0]="";
    prevChoice[1]="";

    document.getElementById("HCount").innerHTML = "Score : "+HSCore;
    document.getElementById("CCount").innerHTML = "Score : "+CScore;

    window.location.reload();
}
