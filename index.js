document.addEventListener('DOMContentLoaded', () => {
  const greeting = document.querySelector('.greeting')
  const end = document.querySelector('.end')
  const form = document.querySelector('form')
  const radioContainer = document.querySelector('.radioContainer')
  const backButton = document.querySelector('.back')
  const continueButton = document.querySelector('.continue')
  const answerButton = document.querySelector('.answer')
  const question = document.querySelector('.question')
  const endPage = document.querySelector('.end')
  const resultWindow = document.querySelector('.count')
  const a = document.querySelector('.l1')
  const b = document.querySelector('.l2')
  const c = document.querySelector('.l3')
  const d = document.querySelector('.l4')
  let counter = 0
  let currentQuestion = 0

  let completedQuestions = []

  const random = function () {
    return Math.ceil(Math.random() * 10)
  }


  const questionData = [
    {
      id: 1,
      question: 'Кем работал Иисус при жизни на Земле?',
      answers: {
        1: 'Кузнец',
        2: 'Плотник',
        3: 'Шахтер',
        4: 'Повар',
      },
      correct: 'Плотник'
    },
    {
      id: 2,
      question: 'Сколько лет Моисей водил свой народ по пустыне?',
      answers: {
        1: '20',
        2: '5',
        3: '37',
        4: '40',
      },
      correct: '40'
    },
    {
      id: 3,
      question: 'Как звали свекровь Руфи?',
      answers: {
        1: 'Ноеминь',
        2: 'Сарра',
        3: 'Айгуль',
        4: 'Мария',
      },
      correct: 'Ноеминь'
    },
    {
      id: 4,
      question: 'Сколько человек спаслось с Ноем на ковчеге?',
      answers: {
        1: '14',
        2: '5',
        3: '21',
        4: '7',
      },
      correct: '7'
    },
    {
      id: 5,
      question: 'Кто первым увидел воскресшего Иисуса?',
      answers: {
        1: 'Мария',
        2: 'Иов',
        3: 'Андрей',
        4: 'Марфа',
      },
      correct: 'Мария'
    },
    {
      id: 6,
      question: 'Сколько дней Иона пробыл в брюхе у рыбы?',
      answers: {
        1: '5',
        2: '1',
        3: '3',
        4: '7',
      },
      correct: '3'
    },
    {
      id: 7,
      question: 'Кто напал на Иудейский народ во время правления царя Езекии?',
      answers: {
        1: 'Евреи',
        2: 'Египет',
        3: 'Баски',
        4: 'Ассирия',
      },
      correct: 'Ассирия'
    },
    {
      id: 8,
      question: 'Кого называют самым мудрым иудейским царем?',
      answers: {
        1: 'Давид',
        2: 'Соломон',
        3: 'Вааса',
        4: 'Иеровоам',
      },
      correct: 'Соломон'
    },
    {
      id: 9,
      question: 'Куда ринулось стадо свиней, в которых вошли бесы, изгнанные Иисусом?',
      answers: {
        1: 'Пустыня',
        2: 'Лес',
        3: 'Море',
        4: 'Обрыв',
      },
      correct: 'Море'
    },
    {
      id: 10,
      question: 'Кто в притче Иисуса помог человеку, который попался разбойникам и остался едва жив?',
      answers: {
        1: 'Торговец',
        2: 'Пастух',
        3: 'Самаритянин',
        4: 'Левит',
      },
      correct: 'Самаритянин'
    }
  ]

  const endTest = function(result) {
    end.style.display = 'block'
    form.style.display = 'none'
    backButton.style.display = 'block'
    endPage.style.display = 'block'
    resultWindow.textContent = result + '/10'
  }

  const setQuestion = function() {
    if(completedQuestions.length == 10) {
      endTest(counter)
    }
    r = random() - 1
    currentQuestion = r
    if(completedQuestions.includes(r) == false) {
      question.textContent = questionData[r].question
      a.textContent = questionData[r].answers[1]
      b.textContent = questionData[r].answers[2]
      c.textContent = questionData[r].answers[3]
      d.textContent = questionData[r].answers[4]
      completedQuestions.push(r)
    } else {
      setQuestion()
    }
    
  }

  continueButton.addEventListener('click', () => {
    continueButton.style.display = 'none'
    greeting.style.display = 'none'
    form.style.display = 'block'

    setQuestion(random() - 1)
  })

  let currentAnswer = [0, 0, 0, 0]

  let checkAnswer = function () {
    let f = currentAnswer.indexOf(1) + 1
    if(questionData[currentQuestion].answers[f] == questionData[currentQuestion].correct) {
      counter++
    }

  }

  answerButton.addEventListener('click', () => {
    checkAnswer()
    setQuestion()
  })


  const setAnswer = function (e) {
    for(i = 0; i <= 3; i++) {
        currentAnswer[i] = 0
    }
    currentAnswer[e - 1] = 1
    console.log(currentAnswer, 'setAnswer')
  }

  radioContainer.addEventListener('click', e => {
    setAnswer(e.target.id)
  })

})