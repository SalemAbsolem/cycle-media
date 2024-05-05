const makeElement = (tagName, className, text) => {
  const element = document.createElement(tagName);

  if(className) {
    element.classList.add(className);
  }

  if(text) {
    element.innerHTML = text;
  }

  return element;
};

// const setAttributes = (el, options) => {
//   Object.keys(options).forEach((attr) => {
//     el.setAttribute(attr, options[attr]);
//   })
// }

const makeSlide = (data) => {
  const slideQuiz = makeElement('fieldset', 'quiz__group');
  slideQuiz.dataset.branch = data[0]['inValue'];

  const slideQuizTitle = makeElement('legend', 'quiz__group-title', data[0]['title']);

  slideQuiz.appendChild(slideQuizTitle);

  if(data[0]['outValue'] === 'final-form') {
    const finalFormTemplate = document.getElementById('final-form');
    const finalForm = finalFormTemplate.content.cloneNode(true);

    slideQuiz.appendChild(finalForm);
  } else {
    const inputWrap = makeElement('div', 'quiz__wrap-group');

    let inputGroup, input, label, primaText, secundaText, toggleIcon;

    for(let i = 1; i < data.length; i++) {
      inputGroup = makeElement('div', 'quiz__input-group');
      inputGroup.classList.add('input-group');

      input = makeElement('input', 'input-group__input');
      if(data[i]['input'] === 'radio' || data[i]['input'] === 'checkbox') {
        input.classList.add('input-group__input--radio', 'visually-hidden');
        input.type = data[i]['input'];
        input.name = data[0]['outValue'];
        input.value = data[i]['value'];
        input.id = `${data[i]['brunch']}-${data[0]['outValue']}`;
        input.dataset.required = data[i]['required'];
      } else if(data[i]['input'] === 'text') {
        input.classList.add('input-group__input--text');
        input.type = data[i]['input'];
        input.name = data[0]['outValue'];
        input.id = `${data[i]['brunch']}-${data[0]['outValue']}`;
        input.placeholder = data[i]['question']['primary-text'];
        input.dataset.required = data[i]['required'];

        label = makeElement('label', 'input-group__label', data[i]['question']['primary-text']);
        label.setAttribute('for', `${data[i]['brunch']}-${data[0]['outValue']}`);
        label.classList.add('visually-hidden');

        inputGroup.appendChild(label);
        inputGroup.appendChild(input);

        inputWrap.appendChild(inputGroup);
        slideQuiz.appendChild(inputWrap);
        return slideQuiz;
      }

      inputGroup.appendChild(input);

      label = makeElement('label', 'input-group__label');
      label.setAttribute('for', `${data[i]['brunch']}-${data[0]['outValue']}`);

      if(data[i]['question']['primary-text']) {
        primaText = makeElement('span', 'input-group__text', data[i]['question']['primary-text']);
        primaText.classList.add('input-group__text--primary');
        label.appendChild(primaText);
      }

      if(data[i]['question']['secondary-text']) {
        secundaText = makeElement('span', 'input-group__text', data[i]['question']['secondary-text']);
        secundaText.classList.add('input-group__text--secondary');
        label.appendChild(secundaText);
      }

      if(data[i]['input'] === 'radio' || data[i]['input'] === 'checkbox') {
        toggleIcon = makeElement('span', 'input-group__toggle-icon', '{&emsp;}');
        label.appendChild(toggleIcon);
      }

      inputGroup.appendChild(label);

      inputWrap.appendChild(inputGroup);
    }

    slideQuiz.appendChild(inputWrap);
  }

  return slideQuiz;
};

const initQuizSlide = (data, quizClass) => {
  const quiz = document.querySelector(`.${quizClass}`);

  if(!quiz) {
    return;
  }

  const slideOfQuiz = makeSlide(data);

  quiz.appendChild(slideOfQuiz);
};

const removeQuizSlide = (data, quizClass) => {
  const quiz = document.querySelector(`.${quizClass}`);

  if(!quiz) {
    return;
  }

  const slidesOfQuiz = quiz.querySelectorAll(`[data-branch="${data[0]['inValue']}"`);

  for(let i = 0; i < slidesOfQuiz.length; i++) {
    quiz.removeChild(slidesOfQuiz[i]);
  }
};

export {initQuizSlide, removeQuizSlide};
