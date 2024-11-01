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
    return Math.ceil(Math.random() * 20)
  }

  const questionData = [
    {
      id: 1,
      question: 'Кто написал произведение "Муха-Цокотуха"?',
      answers: {
        1: 'Корней Чуковский',
        2: 'Александр Пушкин',
        3: 'Лев Толстой',
        4: 'Сергей Есенин',
      },
      correct: 'Корней Чуковский'
    },
    {
      id: 2,
      question: 'Как звали главного героя сказки "Конёк-Горбунок"?',
      answers: {
        1: 'Иван',
        2: 'Петр',
        3: 'Василий',
        4: 'Фёдор',
      },
      correct: 'Иван'
    },
    {
      id: 3,
      question: 'Кто поймал Колобка в русской народной сказке?',
      answers: {
        1: 'Лиса',
        2: 'Заяц',
        3: 'Волк',
        4: 'Медведь',
      },
      correct: 'Лиса'
    },
    {
      id: 4,
      question: 'В сказке "Царевна-Лягушка" Ивану-царевичу помогла...',
      answers: {
        1: 'Лягушка',
        2: 'Жар-птица',
        3: 'Золотая рыбка',
        4: 'Кошка',
      },
      correct: 'Лягушка'
    },
    {
      id: 5,
      question: 'Кто написал стихотворение "У лукоморья дуб зелёный"?',
      answers: {
        1: 'Александр Пушкин',
        2: 'Сергей Есенин',
        3: 'Фёдор Тютчев',
        4: 'Анна Ахматова',
      },
      correct: 'Александр Пушкин'
    },
    {
      id: 6,
      question: 'Как зовут собаку в сказке "Тараканище"?',
      answers: {
        1: 'Тузик',
        2: 'Шарик',
        3: 'Мухтар',
        4: 'Барбос',
      },
      correct: 'Тузик'
    },
    {
      id: 7,
      question: 'Кто поймал Синего Воришку в сказке "Приключения Незнайки и его друзей"?',
      answers: {
        1: 'Гунька',
        2: 'Пончик',
        3: 'Винтик',
        4: 'Пилюлькин',
      },
      correct: 'Гунька'
    },
    {
      id: 8,
      question: 'Кто является автором произведения "Снежная королева"?',
      answers: {
        1: 'Ганс Христиан Андерсен',
        2: 'Шарль Перро',
        3: 'Братья Гримм',
        4: 'Корней Чуковский',
      },
      correct: 'Ганс Христиан Андерсен'
    },
    {
      id: 9,
      question: 'Кто помогал старому крокодилу Гене?',
      answers: {
        1: 'Чебурашка',
        2: 'Карлсон',
        3: 'Винни-Пух',
        4: 'Кот Матроскин',
      },
      correct: 'Чебурашка'
    },
    {
      id: 10,
      question: 'Какой герой умеет летать с помощью пропеллера на спине?',
      answers: {
        1: 'Карлсон',
        2: 'Незнайка',
        3: 'Чебурашка',
        4: 'Айболит',
      },
      correct: 'Карлсон'
    },
    {
      id: 11,
      question: 'Как зовут мышонка из сказки "Мышонок Пик"?',
      answers: {
        1: 'Пик',
        2: 'Чик',
        3: 'Мик',
        4: 'Тик',
      },
      correct: 'Пик'
    },
    {
      id: 12,
      question: 'В каком произведении есть персонаж, который разговаривает с животными?',
      answers: {
        1: 'Доктор Айболит',
        2: 'Муха-Цокотуха',
        3: 'Конёк-Горбунок',
        4: 'Сказка о царе Салтане',
      },
      correct: 'Доктор Айболит'
    },
    {
      id: 13,
      question: 'Кто из героев выучил грамоту в рассказе Льва Толстого?',
      answers: {
        1: 'Воробей',
        2: 'Лягушка',
        3: 'Ёжик',
        4: 'Медведь',
      },
      correct: 'Воробей'
    },
    {
      id: 14,
      question: 'Как зовут главного героя сказки "Золотой ключик, или Приключения Буратино"?',
      answers: {
        1: 'Буратино',
        2: 'Пиноккио',
        3: 'Петя',
        4: 'Незнайка',
      },
      correct: 'Буратино'
    },
    {
      id: 15,
      question: 'В какой сказке встречается Жар-птица?',
      answers: {
        1: 'Иван-царевич и Серый Волк',
        2: 'Конёк-Горбунок',
        3: 'Морозко',
        4: 'Царевна-Лягушка',
      },
      correct: 'Иван-царевич и Серый Волк'
    },
    {
      id: 16,
      question: 'Как звали волшебника из сказки "Волшебник Изумрудного города"?',
      answers: {
        1: 'Гудвин',
        2: 'Мерлин',
        3: 'Дамблдор',
        4: 'Гендальф',
      },
      correct: 'Гудвин'
    },
    {
      id: 17,
      question: 'Кто написал сказку "Красная шапочка"?',
      answers: {
        1: 'Шарль Перро',
        2: 'Ганс Христиан Андерсен',
        3: 'Лев Толстой',
        4: 'Корней Чуковский',
      },
      correct: 'Шарль Перро'
    },
    {
      id: 18,
      question: 'Какой герой упал в воду в сказке "По щучьему велению"?',
      answers: {
        1: 'Емеля',
        2: 'Иван-царевич',
        3: 'Кот в сапогах',
        4: 'Незнайка',
      },
      correct: 'Емеля'
    },
    {
      id: 19,
      question: 'Кто подарил Буратино золотой ключик?',
      answers: {
        1: 'Черепаха Тортила',
        2: 'Лиса Алиса',
        3: 'Карабас-Барабас',
        4: 'Мальвина',
      },
      correct: 'Черепаха Тортила'
    },
    {
      id: 20,
      question: 'Кто был лучшим другом Малыша в повести "Малыш и Карлсон"?',
      answers: {
        1: 'Карлсон',
        2: 'Чебурашка',
        3: 'Пёс Шарик',
        4: 'Мальвина',
      },
      correct: 'Карлсон'
    }
  ]

  const endTest = function(result) {
    end.style.display = 'block'
    form.style.display = 'none'
    backButton.style.display = 'block'
    endPage.style.display = 'block'
    resultWindow.textContent = result + '/20'
  }

  const setQuestion = function(r = random() - 1) {
    if(completedQuestions.length == 20) {
      endTest(counter)
    }
    currentQuestion = r
    if(completedQuestions.includes(r) == false) {
      question.textContent = questionData[r].question
      a.textContent = questionData[r].answers[1]
      b.textContent = questionData[r].answers[2]
      c.textContent = questionData[r].answers[3]
      d.textContent = questionData[r].answers[4]
    } else {
      setQuestion()
    }
  }

  continueButton.addEventListener('click', () => {
    continueButton.style.display = 'none'
    backButton.style.display = 'none'
    answerButton.style.marginLeft = '37%'
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

  answerButton.addEventListener('click', (r) => {
    backButton.style.display = 'block'
    answerButton.style.marginLeft = '55%'
    completedQuestions.push(currentQuestion)
    checkAnswer()
    setQuestion()
  })

  const setAnswer = function (e) {
    for(let i = 0; i <= 3; i++) {
      currentAnswer[i] = 0
    }
    currentAnswer[e - 1] = 1
  }

  radioContainer.addEventListener('click', e => {
    setAnswer(e.target.id)
  })

  backButton.addEventListener('click', e => {
    e.preventDefault()
    setQuestion(completedQuestions.slice(-1))
    completedQuestions.pop()
    if(completedQuestions.length == 0) {
      backButton.style.display = 'none'
      answerButton.style.marginLeft = '40%'
      answerButton.style.marginTop = '9.5%'
    }
  })
})
