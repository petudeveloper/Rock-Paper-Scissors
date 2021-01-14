let myArray=[`rock`,`paper`,`scissors`]; //Arreglo para la seleccion "Random" de la seleccion de la computadora// 
let counterUser= 0;   
let counterComputer=0; 
let userCount = document.querySelector('#userCount');
let computerCount = document.querySelector('#computerCount');
            
            
//Inicio Funcion para comparar los resultados//        
function playRound(e){
    playerSelection = e.target.id; //seleccion del usuario//
    computerSelection = myArray[Math.floor(Math.random()*myArray.length)]; //variable con random para la seleccion de la comutadora//


    //Comparacion de selecciones de la maquina y el usuario//
    //cuando son iguales//
    if (computerSelection == playerSelection){ 
        p.textContent = `Try Again, it's a tie`;
    }else {
        //cuando gana el usuario/
        if ((computerSelection==`rock` && playerSelection.toLowerCase()==`paper`)||
            (computerSelection==`paper` && playerSelection.toLowerCase()==`scissors`)||
            (computerSelection==`scissors` && playerSelection.toLowerCase()==`rock`)){ 
                p.textContent = `User Wins! PLAYER CHOICE ${playerSelection} COMPUTER CHOICE ${computerSelection}.`;
                ++counterUser;
        //cuando gana la maquina//
        }else if ((computerSelection==`rock` && playerSelection.toLowerCase()==`scissors`)||
            (computerSelection==`paper` && playerSelection.toLowerCase()==`rock`)||
            (computerSelection==`scissors` && playerSelection.toLowerCase()==`paper`)){ 
                p.textContent = `Computer Wins! PLAYER CHOICE ${playerSelection} COMPUTER CHOICE ${computerSelection}.`;
                counterComputer++;                    
        }else {alert(`Please select a valid answer`)};            
    };

    //poner el valor del contador para el usuario
    userCount.textContent = `User: ${counterUser}`;

    //poner el valor del contador para la computadora
    computerCount.textContent = `User: ${counterComputer}`;

    winner();
};             
//Final Funcion para comparar los resultados// 

//funcion para acabar el juego cuando uno de los dos llegue a 5
function winner(){
    if (counterUser == 5){
        return alert('User Wins! please press F5 to play again.');
    }else if (counterComputer == 5){
        return alert ('Computer Wins! please press F5 to play agai.');
    };
}; 


let rok = document.querySelector("#rock");
rok.addEventListener('click',playRound);

let pape = document.querySelector("#paper");
pape.addEventListener('click',playRound);

let sciss = document.querySelector("#scissors");
sciss.addEventListener('click',playRound);

const p = document.createElement('p');
const div = document.querySelector('div');        
div.appendChild(p);


        