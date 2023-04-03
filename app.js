const quizData= [
    {
    question: 'Fetret Devri hangi padişahın vefatından sonra başlamıştır?',
    a: 'II.Murat' ,
    b: 'Yıldırım Beyazıt',
    c: 'Yavuz Sultan Selim',
    d: 'I.Mehmed',
    e: 'Kanuni',
    correct: 'b',
    },
    {
        question: 'Osmanlı Devleti nin Rumeli ndeki ilk toprak kazımıhangi padişah zamanında olmuştur?',
        a: 'Osman Bey',
        b: 'Fatih Sultan Mehmet',
        c: 'Orhan Bey',
        d: 'Birinci Ahmed',
        e: 'II.Murat',
        correct: 'c',
    },
    {
        question: 'Anadolu Beyliklerinden destek alınan ilk savaş hangisidir?',
        a: 'Akçay Savaşı',
        b: 'Mercidabık Savaşı',
        c: 'Pelekanon Savaşı',
        d: 'Kosova Savaşı',
        e: 'Anadolu Savaşı',
        correct: 'd',
    },
    {
        question: 'Nigbolu Savaşında kime karşı savaşılmıştır?',
        a: 'Bizanslılar',
        b: 'Haçlılar',
        c: 'Memlükler',
        d: 'Sıprlar',
        e: 'İngilizler',
        correct: 'b',
    },
   {
    question: '36 padişahtan kaçı Deli lakabı ile tanınır?',
    a: '1',
    b: '2',
    c: '3',
    d: '4',
    e: '5',
    correct: 'b',
   },

]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz]

  deselectedAnswers()

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
  e_text.innerText = currentQuizData.e
}

function deselectedAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false))
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id
      }
    })
    return answer
  }

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
  
    //console.log(answer)
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++
      }
      currentQuiz++
  
      if (currentQuiz < quizData.length) {
        loadQuiz()
      } else {
        quiz.innerHTML = `
        <h2> Test tamamlandı, ${score * 20} puan aldınız🥳 </h2>
        <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>
      `
      }
    }
  })