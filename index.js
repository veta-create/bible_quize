document.addEventListener('DOMContentLoaded', () => {
  const greeting = document.querySelector('.greeting')
  const form = document.querySelector('form')
  const question = document.querySelector('.question')
  const a = document.getElementById('l1')
  const b = document.getElementById('l2')
  const c = document.getElementById('l3')
  const d = document.getElementById('l4')

  form.style.display = 'block'
  greeting.style.display = 'none'


  const random = function () {
    return Math.ceil(Math.random() * 10)
  }


  const questionData = [
    {
      id: 1,
      question: 'Кем работал Иисус при жизни на Земле?',
      answers: {
        a: 'Кузнец',
        b: 'Плотник',
        c: 'Шахтер',
        d: 'Повар',
      },
      correct: 'Плотник'
    },
    {
      id: 2,
      question: 'Сколько лет Моисей водил свой народ по пустыне?',
      answers: {
        a: '20',
        b: '5',
        c: '37',
        d: '40',
      },
      correct: '40'
    },
    {
      id: 3,
      question: 'Как звали свекровь Руфи?',
      answers: {
        a: 'Ноеминь',
        b: 'Сарра',
        c: 'Айгуль',
        d: 'Мария',
      },
      correct: 'Ноеминь'
    },
    {
      id: 4,
      question: 'Сколько человек спаслось с Ноем на ковчеге?',
      answers: {
        a: '14',
        b: '5',
        c: '21',
        d: '7',
      },
      correct: '7'
    },
    {
      id: 5,
      question: 'Кто первым увидел воскресшего Иисуса?',
      answers: {
        a: 'Мария',
        b: 'Иов',
        c: 'Андрей',
        d: 'Марфа',
      },
      correct: 'Мария'
    },
    {
      id: 6,
      question: 'Сколько дней Иона пробыл в брюхе у рыбы?',
      answers: {
        a: '5',
        b: '1',
        c: '3',
        d: '7',
      },
      correct: '3'
    },
    {
      id: 7,
      question: 'Кто напал на Иудейский народ во время правления царя Езекии?',
      answers: {
        a: 'Евреи',
        b: 'Египет',
        c: 'Баски',
        d: 'Ассирия',
      },
      correct: 'Ассирия'
    },
    {
      id: 8,
      question: 'Кого называют самым мудрым иудейским царем?',
      answers: {
        a: 'Давид',
        b: 'Соломон',
        c: 'Вааса',
        d: 'Иеровоам',
      },
      correct: 'Соломон'
    },
    {
      id: 9,
      question: 'Куда ринулось стадо свиней, в которых вошли бесы, изгнанные Иисусом?',
      answers: {
        a: 'Пустыня',
        b: 'Лес',
        c: 'Море',
        d: 'Обрыв',
      },
      correct: 'Море'
    },
    {
      id: 10,
      question: 'Кто в пртитче Иисуса помог человеку, который попался разбойникам и остался едва жив?',
      answers: {
        a: 'Торговец',
        b: 'Пастух',
        c: 'Самаритянин',
        d: 'Левит',
      },
      correct: 'Самаритянин'
    }
  ]

  const setQuestion = function(id) {
    question.textContent = questionData[id - 1].question
    a.textContent = questionData[id - 1].answers.a
    b.textContent = questionData[id - 1].answers.b
    c.textContent = questionData[id - 1].answers.c
    d.textContent = questionData[id - 1].answers.d
  }


})