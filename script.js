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

    if(humanChoice != CompChoice)
    {
        if((humanChoice == 'r' && CompChoice == 's') || (humanChoice == 'p' && CompChoice == 'r') || (humanChoice == 's' && CompChoice == 'p'))
        {
            HSCore++;
            document.getElementById("HCount").innerHTML = "Score : "+HSCore;
        } 

        else
        {
            CScore++;
            document.getElementById("CCount").innerHTML = "Score : "+CScore;
        }
    }

    rounds++;
}