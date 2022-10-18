const question=document.querySelector('.questionText');
const answers=Arrary.form (document.querySelectorAll('.options'))

let currentQuestion='';
let availableQuestion=[];
let acceptAnswers=true;
let questionCounter=0;
let score =0;

let questions=[
    {
        question:'Who dropped a hammer and a feather on the Moon to ',
        option1: 'Joseph Priestley',
        option2:'David R. Scott',
        option3:'Joseph Priestley',
        option4:'Refrigerator',
        answer:2,
    },
    {
        question:'If the Earth were made into a black hole, what would be the diameter of its event horizon? ',
        option1: '100mm',
        option2:'50mm',
        option3:'130mm',
        option4:'20mm',
        answer:4,
    },
    {
        question:'If you fell down an airless, frictionless hole going all the way through the Earth, how long would it take to fall to the other side? (To the nearest minute.) ',
        option1: '3 mintue',
        option2:'25 minutes',
        option3:'42 minutes',
        option4:'30 minutes',
        answer:3,
    }, {
        question:'How many hearts does an Octopus Have?',
        option1: 'Three',
        option2:'one',
        option3:'four',
        option4:'five',
        answer:1,
    }, {
        question:'In what year was the product WD40 invented by chemist Norm Larsen?',
        option1: '1995',
        option2:'1953',
        option3:'1945',
        option4:'2002',
        answer:2,
    }, {
        question:'W If you took one step each second in seven-league boots, what would your speed be in miles per hour?',
        option1: 'Joseph Priestley',
        option2:'David R. Scott',
        option3:'Joseph Priestley',
        option4:'Refrigerator'
    }, {
        question:'Who dropped a hammer and a feather on the Moon to ',
        option1: '75,600 miles per hour',
        option2:'75,900 miles per hour',
        option3:'75,900 miles per hour',
        option4:'74,300 miles per hour',
        answer:1,
    },
    {
        question:'What is the furthest you can see with the naked eye?',
        option1: '5.5 million light years',
        option2:'3.5 million light years',
        option3:'4.5 million light years',
        option4:'2.5 million light years',
        answer:4,
    }, {
        question:'To the nearest thousand, how many hairs are there on a typical human head?',
        option1: '11,000 hairs',
        option2:'10,000 hairs',
        option3:'12,000 hairs',
        option4:'103,000 hairs',
        answer:2,
    }, {
        question:'Who invented the gramophone?',
        option1: 'Joseph Priestley',
        option2:'David R. Scott',
        option3:'Joseph Priestley',
        option4:'REmile Berliner',
        answer:4
    }, {
        question:'Who invented man-made fizzy drinks?',
        option1: 'Joseph Priestley',
        option2:'John Ray',
        option3:'Alex ward',
        option4:'Simone',
        answer:1,
    }
]
const SCORE_POINT=100
const MAX_QUESTIONS=4


function startQuiz(){
    questionCounter=0
    score=0
    availableQuestion=[...questions]
    getnewQuestion()
}
function getnewQuestion(){
    if(availableQuestion.length===0 ||questionCounter>MAX_QUESTIONS)
    {
        localStorage.setItem('mostRecentScore',score)
        return window.location.assign('/end.html')
    }
    question++
    const questionsIndex= Math.floor(Math.random()*availableQuestion.length)
    currentQuestion= availableQuestion(questionsIndex)
    question.innerText= currentQuestion.question
}