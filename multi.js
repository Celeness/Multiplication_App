$(document).ready(function () {
  $('.input').focus()
})

let randomNumber1
let randomNumber2
let count = 0

qreateQuestion()
function qreateQuestion() {
  // At first I created 2 random number
  randomNumber1 = Math.floor(Math.random() * 9) + 2
  randomNumber2 = Math.floor(Math.random() * 29) + 2

  // Assigned random numbers in question
  let question = document.querySelector('h1')
  question.innerHTML = 'What is ' + randomNumber1 + ' multiply by ' + randomNumber2 + ' ?'
}

// Get score
let score = document.querySelector('h3')

// Run the code if user clicks the submit button
$('.btn').click(function () {
  // Get value of user Answer
  let userAnswer = $('.input').val()
  let rightAnswer = (randomNumber1 * randomNumber2).toString()
  if (userAnswer === rightAnswer) {
    document.querySelector('body').classList.add('animationGreen')
    setTimeout(() => {
      document.querySelector('body').classList.remove('animationGreen')
    }, 500)
    $('.input').val('')
    qreateQuestion()
    count++
    score.innerHTML = 'Score: ' + count
  } else if (userAnswer !== rightAnswer) {
    document.querySelector('body').classList.add('animationRed')
    setTimeout(() => {
      document.querySelector('body').classList.remove('animationRed')
    }, 500)
    $('.input').val('')
    qreateQuestion()
    count--
    score.innerHTML = 'Score: ' + count
  }
})
// Run the code if user press the enter key
$('.input').keydown(function (event) {
  let key = event.key
  let userAnswer = $('.input').val()
  let rightAnswer = (randomNumber1 * randomNumber2).toString()
  if (key === 'Enter') {
    if (userAnswer === rightAnswer) {
      document.querySelector('body').classList.add('animationGreen')
      setTimeout(() => {
        document.querySelector('body').classList.remove('animationGreen')
      }, 500)
      $('.input').val('')
      qreateQuestion()
      count++
      score.innerHTML = 'Score: ' + count
    } else if (userAnswer !== rightAnswer) {
      document.querySelector('body').classList.add('animationRed')
      setTimeout(() => {
        document.querySelector('body').classList.remove('animationRed')
      }, 500)
      $('.input').val('')
      qreateQuestion()
      count--
      score.innerHTML = 'Score: ' + count
    }
  }
})
// Allowing that user can only type number
function isNumberKey(event) {
  let charCode = event.which ? event.which : event.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false
  return true
}
