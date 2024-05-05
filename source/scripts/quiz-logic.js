/*// data quiz
import {serviseQuestions} from  './quizQ.js';

// quiz slide init
import {initQuizSlide} from './quizNewSlide.js';

const quizInit = () => {
  const quiz = document.querySelector('.quiz');
  if(!quiz) {
    return;
  }
  const nextQuestionBtn = quiz.parentElement.querySelector('.main-quiz__button-quiz--next');
  const prevQuestionBtn = quiz.parentElement.querySelector('.main-quiz__button-quiz--prev');
  const quizGroup = quiz.querySelectorAll('.quiz__group');
  let quizInputsValue = [];

  for(let i = 0; i < quizGroup.length; i++) {
    let quizInputs = quizGroup[i].querySelectorAll('.input-group__input');
    for(let j = 0; j < quizInputs.length; j++) {
      // if(quizInputs[j]) {
      //   quizInputsValue.push(quizInputs[j].value);
      // }
      nextQuestionBtn.addEventListener('click', () => {
        if(!quizInputs[j].checked) {

        } else {
          console.log(quizInputs[j].value);
          // initQuizSlide(serviseQuestions, 'quiz');
        }
        // else {
        //   nextQuestionBtn.classList.add('button--disabled');
        // }
      })
    }
  }
  // console.log(quizInputsValue)
  // console.log(nextQuestionBtn)

};

export {quizInit}*/
