const quizData = [
    {
        question: 'How tall is the Eiffel Tower?',
        a: '473m',
        b: '203m',
        c: '324m',
        d: '749m',
        correct: 'c'
    }, {
        question: 'When was the printing press invented?',
        a: '1267',
        b: '1680',
        c: '1456',
        d: '1789',
        correct: 'c'
    }, {
        question: 'When was Stg. Peppers released?',
        a: '1980',
        b: '1967',
        c: '1975',
        d: '1993',
        correct: 'b'
    }, {
        question: 'How many sonnets did Shakespeare write?',
        a: '168',
        b: '30',
        c: '518',
        d: '1',
        correct: 'a'
    }, {
        question: 'Which type of food are peanuts?',
        a: 'Nuts',
        b: 'Cereal',
        c: 'Fruit',
        d: 'Legume',
        correct: 'd'
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
       answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You got ${score}/${quizData.length} right!</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }    
    }
});