let input =document.getElementById("number");
let generator = document.getElementById("generator");

let forBackground = document.getElementById("forBackground");
let waiting = document.getElementById("body");
let refresh = document.getElementById("refresh");



function generatorFunction() {


    let main = document.createElement("div");
    main.className = "main";
    forBackground.appendChild(main);


    let count = input.value;

    if (count > 0 && count < 9) {

        forBackground.style.display = "none";
        waiting.className="waiting"

        setTimeout(() => {
            forBackground.style.display = "block";
            waiting.className="normal"
        }, 3000); 



        for (let index = 0; index < count ; index++) {
            let myArray = [];
            for (let i = 0; i < 6; i++) {
                let randomNumber = Math.floor(Math.random() * 91);
                myArray.push(randomNumber);
            };
            myArray.sort(function(a, b){return a-b});
            console.log(myArray);
        
            let luckyNumbers = document.createElement("div");
            luckyNumbers.className = "lucky-numbers";
        
            for (let i = 0; i < 6; i++) {
                let luckyNumberBall = document.createElement("div");
                luckyNumberBall.className = "luck-numbers_ball";
                luckyNumberBall.innerHTML = myArray[i].toString().padStart(2,0);
                luckyNumbers.appendChild(luckyNumberBall);   
            };
            main.appendChild(luckyNumbers);
        
            //jokernumber
            while (true) {
                jokerBallNummer = Math.floor(Math.random() * 91)
            
                if (myArray.indexOf(jokerBallNummer) == -1) {
                    let jokerBall = document.createElement("div");
                    jokerBall.className = "joker";
                    jokerBall.innerHTML =  jokerBallNummer.toString().padStart(2,0);
                    luckyNumbers.appendChild(jokerBall);
                    break
                }
            };
        
            let perfectNumberBall = document.createElement("div");
            perfectNumberBall.className = "perfect";
            perfectNumberBall.innerHTML = Math.floor(Math.random() * 91).toString().padStart(2,0);
            luckyNumbers.appendChild(perfectNumberBall);
            
            generator.disabled = true;
        }


    }else{
        alert("please enter a number between 0 and 8")
    }
};

generator.addEventListener("click", generatorFunction);


function refreshFunction() {
    input.value = "";
    let main = document.getElementsByClassName("main")[0];
    main.remove();
    generator.disabled = false;
}

refresh.addEventListener("click", refreshFunction)


/* 
let myArray = [];


for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 91);
    myArray.push(randomNumber);
}

myArray.sort(function(a, b){return a-b});
console.log(myArray);




let luckyNumbers = document.createElement("div");
luckyNumbers.className = "lucky-numbers";
for (let i = 0; i < 6; i++) {
    let luckyNumberBall = document.createElement("div");
    luckyNumberBall.className = "luck-numbers_ball";
    luckyNumberBall.innerHTML = myArray[i]
    luckyNumbers.appendChild(luckyNumberBall);   
};

main.appendChild(luckyNumbers);

//jokernumber
while ( true) {
    jokerBallNummer = Math.floor(Math.random() * 91)

    if (myArray.indexOf(jokerBallNummer) == -1) {
        let jokerBall = document.createElement("div");
        jokerBall.className = "luck-numbers_ball";
        jokerBall.innerHTML =  jokerBallNummer;
        luckyNumbers.appendChild(jokerBall);
        break
    }
};

//perfectnumber
let perfectNumberBall = document.createElement("div");
perfectNumberBall.className = "luck-numbers_ball";
perfectNumberBall.innerHTML = Math.floor(Math.random() * 91);
luckyNumbers.appendChild(perfectNumberBall); */




/* function leftFillNum(num, targetLength) {
    return num.toString().padStart(targetLength, 0);
}

const num = 123;
console.log( Number(leftFillNum(num, 5))); */