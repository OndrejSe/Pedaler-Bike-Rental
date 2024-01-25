import faqData from './data/faqData.js'
import { accordions, addClass, removeClass,  } from './utils/utils.js'

const askUsContainer = document.getElementById('ask-us')
const questionsContainer = document.getElementById('questions-container')
const questionForm = document.getElementById('question-form')
const questionMessage = document.getElementById('question-message')
const questionCounter = document.getElementById('question-counter')
const submitButton = document.getElementById('question-submit')
const askAgainButton = document.getElementById('ask-again-button')

questionsContainer.innerHTML = faqData.map((question) => {
    return `<div class='question-box' id='div${question.id}' background-color:red;'>
        <div class='box-header'>
                <span class='question'>${question.question}</span>
                <button>
                    <i class='fa-solid fa-plus'></i>
                    <i class='fa-solid fa-minus'></i>
                </button>
            </div>
            <div class='content-box'>
                <p class='content'>${question.answer}</p>
            </div>
        </div>`
}).join('')

const messageCounter = (messageInput, resultSpan) => {
    const messageLength = messageInput.value.length
    resultSpan.textContent = `${messageLength}/280`
    if (messageLength === 280) {
        addClass(resultSpan, 'on-limit')
    } else {
        removeClass(resultSpan, 'on-limit')
    }
}

const formValidation = (form) => {
    const formInputs = form.querySelectorAll('.input')
    const emailPattern = /^([a-z\d\.\-]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

    formInputs.forEach ((input) => {
        if(input.classList.contains('email') && !input.value.match(emailPattern) || input.value === ''){
                addClass(input.parentElement, 'invalid')
        } else {
            if (input.parentElement.classList.contains('invalid')){
                removeClass(input.parentElement, 'invalid')
            }
        }
    })

    let inputInvalid = false

    formInputs.forEach ((input) => {
        if(input.parentElement.classList.contains('invalid')){
            inputInvalid = true
        }
    }) 

    if (inputInvalid === false) {
        formInputs.forEach ((input) => {
            input.value = ''
            addClass(askUsContainer, 'send')
        })
    }
}

const init = () => {
    const questionBoxes = document.querySelectorAll('.question-box')
    
    accordions(questionBoxes)
}

window.addEventListener('DOMContentLoaded', init)

questionMessage.addEventListener('input', () => {
    messageCounter(questionMessage, questionCounter)
})

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    formValidation(questionForm)
})

askAgainButton.addEventListener('click', () => {
    removeClass(askUsContainer, 'send')
})    