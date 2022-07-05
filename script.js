const quizeData = [
    {
        question: "Who invented Java ?",
        a :"Ray Ronald",
        b : "James Gosling",
        c : "Dennis Ritche",
        d : "Guido Van",
        correct : "b",
    },
    {
        question : "Who is the primeminister of India ?",
        a : "Monmohan Sing",
        b : "Prativa Patil",
        c : "Navin Pattnaik",
        d : "Narendra Modi",
        correct:"d",

    },
    {
        question :" Full form of CBI",
        a : "Center Beuru of Investigation",
        b : "Center Basemet of Industries",
        c : "Central Beuru of Investigation",
        d :"Canada Branch of Industries",
        correct :"c",
    },

    {
        question : "Inwhich year Javascript Launch ?",
        a : "1995",
        b :"1985",
        c :"1999",
        d :"none",
        correct :"a",
    },
];
const quiz = document.getElementById("quize");
const answerE1s = document.querySelectorAll(".answer");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text= document.getElementById("b_text");
const c_text= document.getElementById("c_text");
const d_text= document.getElementById("d_text");
const submitBtn= document.getElementById("submit");

let currentQuize = 0;
let score = 0;

loadQuize();

function loadQuize(){
    deselectAnswer();

    const currentQuizeData = quizeData[currentQuize];
    questionE1.innerHTML = currentQuizeData.question;
    a_text.innerHTML = currentQuizeData.a;
    b_text.innerHTML = currentQuizeData.b;
    c_text.innerHTML = currentQuizeData.c;
    d_text.innerHTML = currentQuizeData.d;
}
function getSelected(){
    let answer = undefined;
    answerE1s.forEach((value)=> {
        if (value.checked){
            answer = value.id;
        }
    });
    return answer;
}
function deselectAnswer(){
    answerE1s.forEach((value)=> {
        value.checked = false;
    });
}

submitBtn.addEventListener("click",() => {
    const answer = getSelected();
    if(answer){
        if(answer === quizeData[currentQuize].correct) {
            score++;
        }
        currentQuize++;
        if(currentQuize < quizeData.length){
            loadQuize();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizeData.length} questions. </h2>
            <button onclick = "location.reload()">Reload</button> `;
        }

    }
});