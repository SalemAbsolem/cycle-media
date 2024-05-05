import {parsePhoneNumber, validatePhoneNumberLength, AsYouType} from 'libphonenumber-js';

const addPlusFunction = (array) => {
  for(let i = 0; i < array.length; i++) {
    array[i].addEventListener('focus', () => {
      if(array[i].value.replaceAll(' ', '') === '' || array[i].value.replaceAll(' ', '') === '+') {
        array[i].value = '+';
      }
    });
  }
};

const phoneValidText = (phoneInput) => {
  let errorCode;
  const phoneNumber = new AsYouType();
  phoneNumber.input(phoneInput.value);
  let phoneNumberCountry;
  try {
    phoneInput.value = parsePhoneNumber(phoneInput.value).format('INTERNATIONAL');
    try {
      phoneNumberCountry = phoneNumber.getNumber().country;
    } catch {
      phoneNumberCountry = '';
    }
    errorCode = validatePhoneNumberLength(phoneInput.value, phoneNumberCountry);
  } catch {
    errorCode = validatePhoneNumberLength(phoneInput.value);
  }

  if(errorCode === undefined) {
    return true;
  } else {
    return errorCode;
  }
};

const isEmailValid = (value) => {
  const emailRegexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  return emailRegexp.test(value);
};

const formValidating = (selectorForm) => {
  let forms;
  if(!selectorForm) {
    forms = document.querySelectorAll('form');
  } else {
    forms = document.querySelectorAll(selectorForm);
  }
  if(!forms) {
    return;
  }

  const errorList = {
    'NOT_A_NUMBER': '!Номер должен состоять из цифр',
    'INVALID_COUNTRY': '!Укажите верный код страны',
    'TOO_SHORT': '!Номер слишком короткий',
    'TOO_LONG': '!Номер слишком длинный',
    'INVALID_LENGTH': '!Неверная длина номера'
  };

  const emptyErrorText = '!Это поле необходимо заполнить';

  const emailErrorText = '!Укажите настоящий Email';

  const privacyErrorText = '!Без этого мы не сможем с вами связаться';


  for(let i = 0; i < forms.length; i++) {
    const inputsText = forms[i].querySelectorAll('input[type="text"][data-required="true"]');
    const inputsTextError = forms[i].querySelectorAll('input[type="text"][data-required="true"] + [class*="__input-error"]');
    const inputsEmail = forms[i].querySelectorAll('input[type="email"][data-required="true"]');
    const inputsEmailError = forms[i].querySelectorAll('input[type="email"][data-required="true"] + [class*="__input-error"]');
    const inputsPhone = forms[i].querySelectorAll('input[type="tel"][data-required="true"]');
    const inputsPhoneError = forms[i].querySelectorAll('input[type="tel"][data-required="true"] + [class*="__input-error"]');
    const inputsCheckbox = forms[i].querySelectorAll('input[type="checkbox"][data-required="true"]');
    const inputsCheckboxError = forms[i].querySelectorAll('input[type="checkbox"][data-required="true"] + [class*="__input-error"]');
    const inputs = [inputsText, inputsEmail, inputsPhone];
    const inputError = [inputsTextError, inputsEmailError, inputsPhoneError];

    const submitBtn = forms[i].querySelectorAll('button[type="submit"]');

    addPlusFunction(inputsPhone);
    let validPhoneText;
    for(let q = 0; q < inputsPhone.length; q++) {
      inputsPhone[q].addEventListener('change', () => {
        validPhoneText = phoneValidText(inputsPhone[q]);
      });
    }

    for(let j = 0; j < submitBtn.length; j++) {
      submitBtn[j].addEventListener('click', (e) => {
        for(let q = 0; q < inputs.length; q++) {
          for(let p = 0; p < inputs[q].length; p++) {
            inputs[q][p].classList.remove(`${forms[i].id}__input--empty`);
            if(inputs[q][p].value.replaceAll(' ', '') === '') {
              e.preventDefault();
              inputs[q][p].value = null;
              inputs[q][p].classList.add(`${forms[i].id}__input--empty`);
              inputError[q][p].textContent = emptyErrorText;
            } else {
              inputs[q][p].classList.remove(`${forms[i].id}__input--empty`);
              inputError[q][p].textContent = null;
            }
          }
        }
        for(let q = 0; q < inputsPhone.length; q++) {
          inputsPhone[q].classList.remove(`${forms[i].id}__input--invalid`);
          if(errorList[validPhoneText]) {
            e.preventDefault();
            inputsPhone[q].classList.add(`${forms[i].id}__input--invalid`);
            inputsPhoneError[q].textContent = errorList[validPhoneText];
          } else {
            if(inputsPhoneError[q].textContent === emptyErrorText) {
              inputsPhoneError[q].textContent = emptyErrorText;
            } else {
              inputsPhoneError[q].textContent = null;
            }
            inputsPhone[q].classList.remove(`${forms[i].id}__input--invalid`);
          }
        }
        for(let q = 0; q < inputsEmail.length; q++) {
          inputsEmail[q].classList.remove(`${forms[i].id}__input--invalid`);
          if(!isEmailValid(inputsEmail[q].value)) {
            e.preventDefault();
            inputsEmail[q].classList.add(`${forms[i].id}__input--invalid`);
            inputsEmailError[q].textContent = emailErrorText;
          } else {
            if(inputsEmailError[q].textContent === emptyErrorText) {
              inputsEmailError[q].textContent = emptyErrorText;
            } else {
              inputsEmailError[q].textContent = null;
            }
            inputsEmail[q].classList.remove(`${forms[i].id}__input--invalid`);
          }
        }
        for(let q = 0; q < inputsCheckbox.length; q++) {
          const parentCheckbox = inputsCheckbox[q].parentElement;
          const toggleIconCheckbox = parentCheckbox.querySelector('[class*="__toggle-icon"]');
          const labelCheckbox = parentCheckbox.querySelector('[class*="__label"]');
          const linkCheckbox = parentCheckbox.querySelector('[class*="__checkbox-link"]');
          if(!inputsCheckbox[q].checked) {
            e.preventDefault();
            toggleIconCheckbox.style.color = '#ff0000';
            labelCheckbox.style.color = '#ff0000';
            linkCheckbox.style.color = '#ff0000';
            inputsCheckboxError[q].textContent = privacyErrorText;
          } else {
            inputsCheckboxError[q].textContent = null;
            toggleIconCheckbox.style.color = null;
            labelCheckbox.style.color = null;
            linkCheckbox.style.color = null;
          }
        }
      });
    }
  }
};

export {formValidating};
