// data quiz
import {devQuestions, devSiteQuestions, devStyleQuestions, devBrandBookQuestions, devAllOfThemQuestions, marketingQuestions, marketingMarketingStrategyQuestions, marketingContentStrategyQuestions, marketingPromotionQuestions, marketingBrandbookQuestions, marketingAllOfThemQuestions, allOfThemQuestions} from './quiz-q.js';

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
          removeQuizSlide(marketingQuestions, 'quiz');
          removeQuizSlide(allOfThemQuestions, 'quiz');

          for(let i = 0; i < marketingMarketingStrategyQuestions.length; i++) {
            removeQuizSlide(marketingMarketingStrategyQuestions[i], 'quiz');
          }
          for(let i = 0; i < marketingContentStrategyQuestions.length; i++) {
            removeQuizSlide(marketingContentStrategyQuestions[i], 'quiz');
          }
          for(let i = 0; i < marketingPromotionQuestions.length; i++) {
            removeQuizSlide(marketingPromotionQuestions[i], 'quiz');
          }
          for(let i = 0; i < marketingBrandbookQuestions.length; i++) {
            removeQuizSlide(marketingBrandbookQuestions[i], 'quiz');
          }
          removeQuizSlide(marketingAllOfThemQuestions, 'quiz');

          initQuizSlide(devQuestions, 'quiz');
        }
      } else if(quizInputChecked && quizInputChecked.id === marketingQuestions[0]['inValue']) {
        if(!quizNextGroup) {
          initQuizSlide(marketingQuestions, 'quiz');
        } else if(quizNextGroup.getAttribute('data-branch') !== marketingQuestions[0]['inValue']) {
          removeQuizSlide(devQuestions, 'quiz');
          removeQuizSlide(allOfThemQuestions, 'quiz');

          for(let i = 0; i < devSiteQuestions.length; i++) {
            removeQuizSlide(devSiteQuestions[i], 'quiz');
          }
          for(let i = 0; i < devStyleQuestions.length; i++) {
            removeQuizSlide(devStyleQuestions[i], 'quiz');
          }
          for(let i = 0; i < devBrandBookQuestions.length; i++) {
            removeQuizSlide(devBrandBookQuestions[i], 'quiz');
          }
          removeQuizSlide(devAllOfThemQuestions, 'quiz');

          initQuizSlide(marketingQuestions, 'quiz');
        }
      } else if(quizInputChecked && quizInputChecked.id === allOfThemQuestions[0]['inValue']) {
        if(!quizNextGroup) {
          initQuizSlide(allOfThemQuestions, 'quiz');
        } else if(quizNextGroup.getAttribute('data-branch') !== allOfThemQuestions[0]['inValue']) {
          removeQuizSlide(devQuestions, 'quiz');
          removeQuizSlide(marketingQuestions, 'quiz');

          for(let i = 0; i < devSiteQuestions.length; i++) {
            removeQuizSlide(devSiteQuestions[i], 'quiz');
          }
          for(let i = 0; i < devStyleQuestions.length; i++) {
            removeQuizSlide(devStyleQuestions[i], 'quiz');
          }
          for(let i = 0; i < devBrandBookQuestions.length; i++) {
            removeQuizSlide(devBrandBookQuestions[i], 'quiz');
          }
          removeQuizSlide(devAllOfThemQuestions, 'quiz');

          for(let i = 0; i < marketingMarketingStrategyQuestions.length; i++) {
            removeQuizSlide(marketingMarketingStrategyQuestions[i], 'quiz');
          }
          for(let i = 0; i < marketingContentStrategyQuestions.length; i++) {
            removeQuizSlide(marketingContentStrategyQuestions[i], 'quiz');
          }
          for(let i = 0; i < marketingPromotionQuestions.length; i++) {
            removeQuizSlide(marketingPromotionQuestions[i], 'quiz');
          }
          for(let i = 0; i < marketingBrandbookQuestions.length; i++) {
            removeQuizSlide(marketingBrandbookQuestions[i], 'quiz');
          }
          removeQuizSlide(marketingAllOfThemQuestions, 'quiz');

          initQuizSlide(allOfThemQuestions, 'quiz');
        }
      }

      if((quizInputChecked && quizInputChecked.id === devSiteQuestions[0][0]['inValue']) || (quizGroup.getAttribute('data-branch') === devSiteQuestions[0][0]['inValue'])) {
        for(let i = 0; i < devStyleQuestions.length; i++) {
          removeQuizSlide(devStyleQuestions[i], 'quiz');
        }
        for(let i = 0; i < devBrandBookQuestions.length; i++) {
          removeQuizSlide(devBrandBookQuestions[i], 'quiz');
        }
        removeQuizSlide(devAllOfThemQuestions, 'quiz');
        if(quizNextGroup) {
          if(quizNextGroup.getAttribute('data-branch') !== devSiteQuestions[0][0]['inValue']) {
            generated = false;
          }
        }
        if(!generated) {
          for(let i = 0; i < devSiteQuestions.length; i++) {
            initQuizSlide(devSiteQuestions[i], 'quiz');
          }
          generated = true;
        }
      } else if((quizInputChecked && quizInputChecked.id === devStyleQuestions[0][0]['inValue']) || (quizGroup.getAttribute('data-branch') === devStyleQuestions[0][0]['inValue'])) {
        for(let i = 0; i < devSiteQuestions.length; i++) {
          removeQuizSlide(devSiteQuestions[i], 'quiz');
        }
        for(let i = 0; i < devBrandBookQuestions.length; i++) {
          removeQuizSlide(devBrandBookQuestions[i], 'quiz');
        }
        removeQuizSlide(devAllOfThemQuestions, 'quiz');
        if(quizNextGroup) {
          if(quizNextGroup.getAttribute('data-branch') !== devStyleQuestions[0][0]['inValue']) {
            generated = false;
          }
        }
        if(!generated) {
          for(let i = 0; i < devStyleQuestions.length; i++) {
            initQuizSlide(devStyleQuestions[i], 'quiz');
          }
          generated = true;
        }
      } else if((quizInputChecked && quizInputChecked.id === devBrandBookQuestions[0][0]['inValue']) || (quizGroup.getAttribute('data-branch') === devBrandBookQuestions[0][0]['inValue'])) {
        for(let i = 0; i < devSiteQuestions.length; i++) {
          removeQuizSlide(devSiteQuestions[i], 'quiz');
        }
        for(let i = 0; i < devStyleQuestions.length; i++) {
          removeQuizSlide(devStyleQuestions[i], 'quiz');
        }
        removeQuizSlide(devAllOfThemQuestions, 'quiz');
        if(quizNextGroup) {
          if(quizNextGroup.getAttribute('data-branch') !== devBrandBookQuestions[0][0]['inValue']) {
            generated = false;
          }
        }
        if(!generated) {
          for(let i = 0; i < devBrandBookQuestions.length; i++) {
            initQuizSlide(devBrandBookQuestions[i], 'quiz');
          }
          generated = true;
        }
      } else if((quizInputChecked && quizInputChecked.id === devAllOfThemQuestions[0]['inValue']) || (quizGroup.getAttribute('data-branch') === devAllOfThemQuestions[0]['inValue'])) {
        for(let i = 0; i < devSiteQuestions.length; i++) {
          removeQuizSlide(devSiteQuestions[i], 'quiz');
        }
        for(let i = 0; i < devStyleQuestions.length; i++) {
          removeQuizSlide(devStyleQuestions[i], 'quiz');
        }
        for(let i = 0; i < devBrandBookQuestions.length; i++) {
          removeQuizSlide(devBrandBookQuestions[i], 'quiz');
        }
        if(quizNextGroup) {
          if(quizNextGroup.getAttribute('data-branch') !== devAllOfThemQuestions[0]['inValue']) {
            generated = false;
          }
        }
        if(!generated) {
          initQuizSlide(devAllOfThemQuestions, 'quiz');
          generated = true;
        }
      } else {
        generated = false;
      }

      if((quizInputChecked && quizInputChecked.id === marketingMarketingStrategyQuestions[0][0]['inValue']) || (quizGroup.getAttribute('data-branch') === marketingMarketingStrategyQuestions[0][0]['inValue'])) {
        for(let i = 0; i < marketingContentStrategyQuestions.length; i++) {
          removeQuizSlide(marketingContentStrategyQuestions[i], 'quiz');
        }
        for(let i = 0; i < marketingPromotionQuestions.length; i++) {
          removeQuizSlide(marketingPromotionQuestions[i], 'quiz');
        }
        for(let i = 0; i < marketingBrandbookQuestions.length; i++) {
          removeQuizSlide(marketingBrandbookQuestions[i], 'quiz');
        }
        removeQuizSlide(marketingAllOfThemQuestions, 'quiz');
        if(quizNextGroup) {
          if(quizNextGroup.getAttribute('data-branch') !== marketingMarketingStrategyQuestions[0][0]['inValue']) {
            generated = false;
          }
        }
        if(!generated) {
          for(let i = 0; i < marketingMarketingStrategyQuestions.length; i++) {
            initQuizSlide(marketingMarketingStrategyQuestions[i], 'quiz');
          }
          generated = true;
        }
      } else if((quizInputChecked && quizInputChecked.id === marketingContentStrategyQuestions[0][0]['inValue']) || (quizGroup.getAttribute('data-branch') === marketingContentStrategyQuestions[0][0]['inValue'])) {
        for(let i = 0; i < marketingMarketingStrategyQuestions.length; i++) {
          removeQuizSlide(marketingMarketingStrategyQuestions[i], 'quiz');
        }
        for(let i = 0; i < marketingPromotionQuestions.length; i++) {
          removeQuizSlide(marketingPromotionQuestions[i], 'quiz');
        }
        for(let i = 0; i < marketingBrandbookQuestions.length; i++) {
          removeQuizSlide(marketingBrandbookQuestions[i], 'quiz');
        }
        removeQuizSlide(marketingAllOfThemQuestions, 'quiz');
        if(quizNextGroup) {
          if(quizNextGroup.getAttribute('data-branch') !== marketingContentStrategyQuestions[0][0]['inValue']) {
            generated = false;
          }
        }
        if(!generated) {
          for(let i = 0; i < marketingContentStrategyQuestions.length; i++) {
            initQuizSlide(marketingContentStrategyQuestions[i], 'quiz');
          }
          generated = true;
        }
      } else if((quizInputChecked && quizInputChecked.id === marketingPromotionQuestions[0][0]['inValue']) || (quizGroup.getAttribute('data-branch') === marketingPromotionQuestions[0][0]['inValue'])) {
        for(let i = 0; i < marketingMarketingStrategyQuestions.length; i++) {
          removeQuizSlide(marketingMarketingStrategyQuestions[i], 'quiz');
        }
        for(let i = 0; i < marketingContentStrategyQuestions.length; i++) {
          removeQuizSlide(marketingContentStrategyQuestions[i], 'quiz');
        }
        for(let i = 0; i < marketingBrandbookQuestions.length; i++) {
          removeQuizSlide(marketingBrandbookQuestions[i], 'quiz');
        }
        removeQuizSlide(marketingAllOfThemQuestions, 'quiz');
        if(quizNextGroup) {
          if(quizNextGroup.getAttribute('data-branch') !== marketingPromotionQuestions[0][0]['inValue']) {
            generated = false;
          }
        }
        if(!generated) {
          for(let i = 0; i < marketingPromotionQuestions.length; i++) {
            initQuizSlide(marketingPromotionQuestions[i], 'quiz');
          }
          generated = true;
        }
      } else if((quizInputChecked && quizInputChecked.id === marketingBrandbookQuestions[0][0]['inValue']) || (quizGroup.getAttribute('data-branch') === marketingBrandbookQuestions[0][0]['inValue'])) {
        for(let i = 0; i < marketingMarketingStrategyQuestions.length; i++) {
          removeQuizSlide(marketingMarketingStrategyQuestions[i], 'quiz');
        }
        for(let i = 0; i < marketingContentStrategyQuestions.length; i++) {
          removeQuizSlide(marketingContentStrategyQuestions[i], 'quiz');
        }
        for(let i = 0; i < marketingPromotionQuestions.length; i++) {
          removeQuizSlide(marketingPromotionQuestions[i], 'quiz');
        }
        removeQuizSlide(marketingAllOfThemQuestions, 'quiz');
        if(quizNextGroup) {
          if(quizNextGroup.getAttribute('data-branch') !== marketingBrandbookQuestions[0][0]['inValue']) {
            generated = false;
          }
        }
        if(!generated) {
          for(let i = 0; i < marketingBrandbookQuestions.length; i++) {
            initQuizSlide(marketingBrandbookQuestions[i], 'quiz');
          }
          generated = true;
        }
      } else if((quizInputText && quizInputText.value && quizInputText.id === marketingAllOfThemQuestions[0]['inValue']) || (quizGroup.getAttribute('data-branch') === marketingAllOfThemQuestions[0]['inValue'])) {
        for(let i = 0; i < marketingMarketingStrategyQuestions.length; i++) {
          removeQuizSlide(marketingMarketingStrategyQuestions[i], 'quiz');
        }
        for(let i = 0; i < marketingContentStrategyQuestions.length; i++) {
          removeQuizSlide(marketingContentStrategyQuestions[i], 'quiz');
        }
        for(let i = 0; i < marketingPromotionQuestions.length; i++) {
          removeQuizSlide(marketingPromotionQuestions[i], 'quiz');
        }
        for(let i = 0; i < marketingBrandbookQuestions.length; i++) {
          removeQuizSlide(marketingBrandbookQuestions[i], 'quiz');
        }
        if(quizNextGroup) {
          if(quizNextGroup.getAttribute('data-branch') !== marketingAllOfThemQuestions[0]['inValue']) {
            generated = false;
          }
        }
        if(!generated) {
          initQuizSlide(marketingAllOfThemQuestions, 'quiz');
          generated = true;
        }
      } else {
        generated = false;
      }

      slider.updateProgress();
      slider.updateSlides();
      slider.slideNext();

      /*else {
        for(let i = 0; i < devSiteQuestions.length; i++) {
          removeQuizSlide(devSiteQuestions[i], 'quiz');
        }
        generated = false;
      }*/

      // quizLength = quiz.querySelectorAll('.quiz__group').length - 1;
      // if(slider.activeIndex === quizLength && slider.activeIndex >= 1) {
      //   console.log(quizNextGroup)
      //   if(!quizNextGroup) {
      //     if(quizNextGroup.getAttribute('data-branch') === allOfThemQuestions[0]['inValue']) {
      //       nextQ.classList.add('button--disabled');
      //     }
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
    }
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
