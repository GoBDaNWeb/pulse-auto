export function validateForm() {
  let forms = document.querySelectorAll(".form");

  const showFormSuccess = (modalWindow) => {
    let orderWindow = modalWindow.querySelector(".modal-window__content-order");
    let orderShortWindow = modalWindow.querySelector(
      ".modal-window__content-short-order"
    );
    let successWindow = modalWindow.querySelector(
      ".modal-window__content-success"
    );
    orderWindow.classList.remove("active");
    orderShortWindow.classList.remove("active");
    modalWindow.classList.add("active");
    successWindow.classList.add("active");
  };

  const showSuccessMessage = () => {
    const successModal = document.querySelector(".modal-success");
    const modalCall = document.querySelector(".modal-trade");
    const modalTrade = document.querySelector(".modal-call");

    successModal.classList.add("active");
    modalCall.classList.remove("active");
    modalTrade.classList.remove("active");
  };

  forms.forEach((form) => {
    const nameInput = form.querySelector(".input__valid-name");
    const stampInput = form.querySelector(".input__valid-stamp");
    const modelInput = form.querySelector(".input__valid-model");
    const phoneInput = form.querySelector(".input__valid-phone");
    const countInput = form.querySelector(".input__valid-positive-number");
    const timeInput = form.querySelector(".input__valid-time");
    const dateInput = form.querySelector(".input__valid-date");
    const yearInput = form.querySelector(".input__valid-year");
    const mileageInput = form.querySelector(".input__valid-mileage");

    let validation = true;

    const setError = (input, text) => {
      let inputRow = input.closest(".input__row");
      let inputItemSmall = inputRow.querySelector(".input__item-small");
      inputItemSmall.textContent = text;

      validation = false;

      inputRow.classList.remove("success");
      inputRow.classList.add("error");
    };

    const setSucces = (input, text) => {
      let inputRow = input.closest(".input__row");
      let inputItemSmall = inputRow.querySelector(".input__item-small");
      inputItemSmall.textContent = text;

      inputRow.classList.remove("error");
      inputRow.classList.add("success");
    };

    const isName = (name) => {
      let re = /^[А-Яа-яA-Za-z\ё\Ё\ \-]/g;
      return re.test(name.value);
    };

    const isCount = (count) => {
      let re = /^[0-9]/g;
      return re.test(count.value);
    };

    const isTime = (time) => {
      let re = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
      return re.test(time.value);
    };

    const isDate = (date) => {
      //let re = /^[0-3][0-9].[0-1][0-9].[1-2][0-9][0-9][0-9]$/;
      let re =
        /^([0-1]?[0-9]|2[0-9]|3[0-1]).([0]?[0-9]|1[0-2]).[1-2][0-9][0-9][0-9]$/;
      return re.test(date.value);
    };

    const checkInputsShort = () => {
      if (nameInput.value === "") {
        setError(nameInput, "Обязательное поле");
      } else if (!isName(nameInput)) {
        setError(nameInput, "Проверьте поле на правильность заполения.");
      } else {
        setSucces(nameInput, "");
      }
      if (stampInput) {
        if (stampInput.value === "") {
          setError(stampInput, "Обязательное поле.");
        } else if (!isName(stampInput)) {
          setError(stampInput, "Проверьте поле на правильность заполения.");
        } else {
          setSucces(stampInput, "");
        }
      }
      if (modelInput) {
        if (modelInput.value === "") {
          setError(modelInput, "Обязательное поле.");
        } else if (!isName(modelInput)) {
          setError(modelInput, "Проверьте поле на правильность заполения.");
        } else {
          setSucces(modelInput, "");
        }
      }
      if (yearInput) {
        if (yearInput.value === "") {
          setError(yearInput, "Обязательное поле.");
        } else if (!isCount(yearInput)) {
          setError(yearInput, "Проверьте поле на правильность заполения.");
        } else {
          setSucces(yearInput, "");
        }
      }
      if (mileageInput) {
        if (mileageInput.value === "") {
          setError(mileageInput, "Обязательное поле.");
        } else if (!isCount(mileageInput)) {
          setError(mileageInput, "Проверьте поле на правильность заполения.");
        } else {
          setSucces(mileageInput, "");
        }
      }

      if (phoneInput.value === "") {
        setError(phoneInput, "Укажите телефон");
      } else if (phoneInput.value.length < 18) {
        setError(phoneInput, "Телефон не найден.");
      } else {
        setSucces(phoneInput, "");
      }
    };

    const checkInputs = () => {
      if (nameInput.value === "") {
        setError(nameInput, "Обязательное поле.");
      } else if (!isName(nameInput)) {
        setError(nameInput, "Проверьте поле на правильность заполения.");
      } else {
        setSucces(nameInput, "");
      }
      if (stampInput.value === "") {
        setError(stampInput, "Обязательное поле.");
      } else if (!isName(stampInput)) {
        setError(stampInput, "Проверьте поле на правильность заполения.");
      } else {
        setSucces(stampInput, "");
      }
      if (modelInput.value === "") {
        setError(modelInput, "Обязательное поле.");
      } else if (!isName(modelInput)) {
        setError(modelInput, "Проверьте поле на правильность заполения.");
      } else {
        setSucces(modelInput, "");
      }

      if (countInput && countInput.value === "") {
        setError(countInput, "Обязательное поле.");
      } else if (!isCount(countInput) && countInput) {
        setError(countInput, "Некорректный формат.");
      } else {
        setSucces(countInput, "");
      }

      if (timeInput && timeInput.value === "") {
        setError(timeInput, "Обязательное поле.");
      } else if (!isTime(timeInput) && timeInput) {
        setError(timeInput, "Некорректная время.");
      } else {
        setSucces(timeInput, "");
      }

      if (dateInput && dateInput.value === "") {
        setError(dateInput, "Обязательное поле.");
      } else if (!isDate(dateInput) && dateInput) {
        setError(dateInput, "Некорректная дата.");
      } else {
        setSucces(dateInput, "");
      }

      if (phoneInput.value === "") {
        setError(phoneInput, "Обязательное поле.");
      } else if (phoneInput.value.length < 18) {
        setError(phoneInput, "Телефон не найден.");
      } else {
        setSucces(phoneInput, "");
      }
    };

    form.addEventListener("submit", (e) => {
      // e.preventDefault();
      validation = true;

      form.classList.contains("form-extended")
        ? checkInputs()
        : checkInputsShort();

      if (validation) {
        console.log("Валидация прошла");
        // валидация пройдена, надо отправить форму и показать сообщение об успешной отправке

        showSuccessMessage();
      } else {
        console.log("Валидация не прошла");
        // валидация не пройдена, надо вывести ошибки и не отправлять форму
      }
    });
  });
}
