// data quiz
import {devQuestions, devSiteQuestions, merketingQuestions, allOfThemQuestions} from './quiz-q.js';

// quiz slide init
import {initQuizSlide, removeQuizSlide} from './quiz-new-slide.js';
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';

// valideting form
import {formValidating} from './form-validation.js';

const quizSlider = () => {
  const sliderQuiz = document.querySelector('.main-quiz__container');
  if(!sliderQuiz) {
    return;
  }
  const slider = new Swiper('.main-quiz__container', {
    modules: [Navigation, Pagination],
    wrapperClass: 'quiz',
    slideClass: 'quiz__group',
    pagination: {
      el: '.main-quiz__quiz-pagination',
      type: 'progressbar',
    },
    navigation: {
      disabledClass: '.button--disabled',
      enabled: false,
    },
    speed: 1000,
    centeredSlides: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
  });
  const qStartBtn = sliderQuiz.querySelector('.button--quiz-start');

  const nextQ = sliderQuiz.querySelector('.main-quiz__button-quiz--next');
  const prevQ = sliderQuiz.querySelector('.main-quiz__button-quiz--prev');

  const quiz = sliderQuiz.querySelector('.quiz');
  let quizGroup, quizInputChecked, quizNextGroup, quizInputText, quizToggle;
  let generated = false;

  qStartBtn.addEventListener('click', () => {
    slider.slideNext();
    nextQ.classList.remove('button--disabled');
    prevQ.classList.remove('button--disabled');
  });


  nextQ.addEventListener('click', () => {
    quizGroup = quiz.querySelector('.quiz__group.swiper-slide-active');
    quizInputChecked = quizGroup.querySelector('.input-group__input:checked');
    quizInputText = quizGroup.querySelector('.input-group__input--text');
    quizNextGroup = quiz.querySelector('.quiz__group.swiper-slide-next');

    quizToggle = quizGroup.querySelectorAll('.input-group__toggle-icon');

    if(quizInputChecked || (!quizInputChecked && quizInputText && quizInputText.value)) {
      for(let i = 0; i < quizToggle.length; i++) {
        quizToggle[i].classList.remove('input-group__toggle-icon--error');
      }
      if (quizInputText) {
        quizInputText.classList.remove('input-group__input--text-error');
      }
      if(quizInputChecked && quizInputChecked.id === devQuestions[0]['inValue']) {
        if(!quizNextGroup) {
          initQuizSlide(devQuestions, 'quiz');
        } else if(quizNextGroup.getAttribute('data-branch') !== devQuestions[0]['inValue']) {
          removeQuizSlide(merketingQuestions, 'quiz');
          removeQuizSlide(allOfThemQuestions, 'quiz');

          initQuizSlide(devQuestions, 'quiz');
        }
      } else if(quizInputChecked && quizInputChecked.id === merketingQuestions[0]['inValue']) {
        if(!quizNextGroup) {
          initQuizSlide(merketingQuestions, 'quiz');
        } else if(quizNextGroup.getAttribute('data-branch') !== merketingQuestions[0]['inValue']) {
          removeQuizSlide(devQuestions, 'quiz');
          removeQuizSlide(allOfThemQuestions, 'quiz');

          initQuizSlide(merketingQuestions, 'quiz');
        }
      } else if(quizInputChecked && quizInputChecked.id === allOfThemQuestions[0]['inValue']) {
        if(!quizNextGroup) {
          initQuizSlide(allOfThemQuestions, 'quiz');
        } else if(quizNextGroup.getAttribute('data-branch') !== allOfThemQuestions[0]['inValue']) {
          removeQuizSlide(devQuestions, 'quiz');
          removeQuizSlide(merketingQuestions, 'quiz');

          initQuizSlide(allOfThemQuestions, 'quiz');
        }
      }
      // узнать текущую ветку, проверить и запустить формирование слайдов
      if((quizInputChecked && quizInputChecked.id === devSiteQuestions[0][0]['inValue']) || (quizGroup.getAttribute('data-branch') === devSiteQuestions[0][0]['inValue'])) {
        if(!generated) {
          for(let i = 0; i < devSiteQuestions.length; i++) {
            initQuizSlide(devSiteQuestions[i], 'quiz');
            generated = true;
          }
        }
      } else {
        for(let i = 0; i < devSiteQuestions.length; i++) {
          removeQuizSlide(devSiteQuestions[i], 'quiz');
          generated = false;
        }
      }

      slider.updateProgress();
      slider.updateSlides();
      slider.slideNext();

      // quizLength = quiz.querySelectorAll('.quiz__group').length - 1;
      // if(quizNextGroup) {
      //   if(quizNextGroup.getAttribute('data-branch') !== allOfThemQuestions[0]['inValue']) {
      //   // if(slider.activeIndex === quizLength) {
      //     nextQ.classList.add('button--disabled');
      //   }
      // }
      formValidating('#quiz');
    } else {
      for(let i = 0; i < quizToggle.length; i++) {
        quizToggle[i].classList.add('input-group__toggle-icon--error');
      }
      if (quizInputText) {
        quizInputText.classList.add('input-group__input--text-error');
      }
      /* eslint-disable no-alert */
      // alert('Выберите хотя бы один пункт');
      /* eslint-enable no-alert */
    }

    // console.log(quizAnswer);
  });


  prevQ.addEventListener('click', () => {
    slider.slidePrev();
    if(slider.activeIndex === 0) {
      nextQ.classList.add('button--disabled');
      prevQ.classList.add('button--disabled');
    } else if(slider.activeIndex > 0) {
      nextQ.classList.remove('button--disabled');
    }
    // quizAnswer.pop();

    // console.log(quizAnswer);
  });

};

export {quizSlider};
