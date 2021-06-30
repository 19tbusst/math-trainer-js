const add = document.querySelector('#add');
const sub = document.querySelector('#sub');
const div = document.querySelector('#div');
const mult = document.querySelector('#mult');
const submit = document.querySelector('.submit > button');
const correctBanner = document.querySelector('.correct > h1')

const question = document.querySelector('#question');

const answer = document.querySelector('.answer > input')

let operator = '+';
let questionString1;
let questionString2;

add.addEventListener('click', function() {
    operator = '+';
    newQuestion();
})

sub.addEventListener('click', function() {
    operator = '-';
    newQuestion();
})

div.addEventListener('click', function() {
    operator = '/';
    newQuestion();
})

mult.addEventListener('click', function() {
    operator = 'x';
    newQuestion();
})

submit.addEventListener('click', submitButton)
answer.addEventListener('keyup', submitButton)

function correctAlert(status) {
    correctBanner.innerText = status;
    correctBanner.style.display = 'block';
    setTimeout(function() {correctBanner.style.display = 'none'}, 1000);
}

function submitButton() {
    if (event.keyCode === 13 || event.keyCode == null) {
    } else {
        return;
    }
    switch (operator) {
        case '+':
            if (answer.value == (questionString1 + questionString2)) {
                correctAlert('Correct');
                answer.value = null;
                newQuestion();
            } else {
                correctAlert('Incorrect');
                answer.value = null;
                newQuestion();
            }
            break;

        case '-':
            if (answer.value == (questionString1 - questionString2)) {
                correctAlert('Correct');
                answer.value = null;
                newQuestion();
            } else {
                correctAlert('Incorrect');
                answer.value = null;
                newQuestion();
            }
            break;

        case '/':
            if (answer.value == (questionString1 / questionString2)) {
                correctAlert('Correct');
                answer.value = null;
                newQuestion();
            } else {
                correctAlert('Incorrect');
                answer.value = null;
                newQuestion();
            }
            break;

        case 'x':
            if (answer.value == (questionString1 * questionString2)) {
                correctAlert('Correct');
                answer.value = null;
                newQuestion();
            } else {
                correctAlert('Incorrect');
                answer.value = null;
                newQuestion();
            }
            break;
    }
}

function randInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function newQuestion() {
    questionString1 = randInt(10);
    questionString2 = randInt(10);
    question.innerText = (questionString1 + ' ' + operator + ' ' + questionString2);
}

newQuestion();
correctBanner.style.display = 'none';
