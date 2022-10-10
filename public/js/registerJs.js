window.addEventListener("load", function () {
  const userNameField = document.querySelector("#nombre");

  userNameField.addEventListener("blur", function (e) {
    const fieldValue = e.target.value;

    const nombreVacio = document.getElementById("nombre-vacio");

    if (fieldValue === "") {
      nombreVacio.classList.remove("hidden");
    }
    if (fieldValue !== "") {
      nombreVacio.classList.add("hidden");
    }

    const nombre2 = document.getElementById("nombre-2");

    if (fieldValue.trim().length < 2) {
      nombre2.classList.remove("hidden");
      userNameField.classList.remove("is-valid");
      userNameField.classList.add("is-invalid");
    }
    if (fieldValue.trim().length >= 2) {
      nombre2.classList.add("hidden");
      userNameField.classList.add("is-valid");
      userNameField.classList.remove("is-invalid");
    }
  });

  const userSurnameField = document.querySelector("#apellido");

  userSurnameField.addEventListener("blur", function (e) {
    const fieldValue = e.target.value;

    const nombreVacio = document.getElementById("apellido-vacio");

    if (fieldValue === "") {
      nombreVacio.classList.remove("hidden");
    }
    if (fieldValue !== "") {
      nombreVacio.classList.add("hidden");
    }

    const nombre2 = document.getElementById("apellido-2");

    if (fieldValue.trim().length < 2) {
      nombre2.classList.remove("hidden");
      userSurnameField.classList.remove("is-valid");
      userSurnameField.classList.add("is-invalid");
    }
    if (fieldValue.trim().length >= 2) {
      nombre2.classList.add("hidden");
      userSurnameField.classList.add("is-valid");
      userSurnameField.classList.remove("is-invalid");
    }
  });

  const emailField = document.querySelector("#email");

  emailField.addEventListener("blur", function (e) {
    const fieldValue = e.target.value;

    const emailVacio = document.getElementById("email-vacio");

    if (fieldValue === "") {
      emailVacio.classList.remove("hidden");
      emailField.classList.remove("is-valid");
      emailField.classList.add("is-invalid");
    }
    if (fieldValue !== "") {
      emailVacio.classList.add("hidden");
    }
  });

  const validateEmailFormat = (e) => {
    const field = e.target;
    const regex = new RegExp(
      /^(([^<>()\[\] \\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@( (\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}] )|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    );
    const emailValido = document.getElementById("email-valido");

    if (regex.test(field.value) === false) {
      emailValido.classList.remove("hidden");
      emailField.classList.remove("is-valid");
      emailField.classList.add("is-invalid");
    }
    if (regex.test(field.value) === true) {
      emailValido.classList.add("hidden");
      emailField.classList.add("is-valid");
      emailField.classList.remove("is-invalid");
    }
  };
  emailField.addEventListener("input", validateEmailFormat);

  //! Validando contraseña
  const passField = document.querySelector("#contraseña");
  passField.addEventListener("focus", function () {
    passValida = document.getElementById("pass-valida");
    passValida.classList.remove("text-secondary");
    passValida.classList.add("text-danger");
    passField.classList.add("is-invalid");
  });

  passField.addEventListener("blur", function () {
    const fieldValue = e.target.value;

    const passVacia = document.getElementById("pass-vacia");

    if (fieldValue === "") {
      passVacia.classList.remove("hidden");
    }
    if (fieldValue !== "") {
      passVacia.classList.add("hidden");
    }
  });

  passField.addEventListener("input", function (e) {
    const fieldValue = e.target.value;

    const validatePassFormat = (e) => {
      const field = e.target;
      const regex = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
      );
      const passValida = document.getElementById("pass-valida");

      const minuscula = new RegExp(/^(?=.*[a-z])/);
      const minusculaOk = document.getElementById("minuscula-ok");
      const mayuscula = new RegExp(/^(?=.*[A-Z])/);
      const mayusculaOk = document.getElementById("mayuscula-ok");
      const especial = new RegExp(/^(?=.*[#$@!%+&*?])/);
      const especialOk = document.getElementById("especial-ok");
      const numero = new RegExp(/^(?=.*[0-9])/);
      const numeroOk = document.getElementById("1-numero");
      const cantidad = new RegExp(/^(?=.{8,})/);
      const cantidadOk = document.getElementById("min-8-ok");

      if (minuscula.test(field.value) === true) {
        minusculaOk.classList.remove("text-danger");
        minusculaOk.classList.add("text-success");
      }
      if (minuscula.test(field.value) === false) {
        minusculaOk.classList.remove("text-success");
        minusculaOk.classList.add("text-danger");
      }

      if (mayuscula.test(field.value) === true) {
        mayusculaOk.classList.remove("text-danger");
        mayusculaOk.classList.add("text-success");
      }
      if (mayuscula.test(field.value) === false) {
        mayusculaOk.classList.remove("text-success");
        mayusculaOk.classList.add("text-danger");
      }
      if (especial.test(field.value) === true) {
        especialOk.classList.remove("text-danger");
        especialOk.classList.add("text-success");
      }
      if (especial.test(field.value) === false) {
        especialOk.classList.remove("text-success");
        especialOk.classList.add("text-danger");
      }
      if (numero.test(field.value) === true) {
        numeroOk.classList.remove("text-danger");
        numeroOk.classList.add("text-success");
      }
      if (numero.test(field.value) === false) {
        numeroOk.classList.remove("text-success");
        numeroOk.classList.add("text-danger");
      }
      if (cantidad.test(field.value) === true) {
        cantidadOk.classList.remove("text-danger");
        cantidadOk.classList.add("text-success");
      }
      if (cantidad.test(field.value) === false) {
        cantidadOk.classList.remove("text-success");
        cantidadOk.classList.add("text-danger");
      }
      if (regex.test(field.value) === false) {
        passField.classList.remove("is-valid");
        passField.classList.add("is-invalid");
      }
      if (regex.test(field.value) === true) {
        passField.classList.add("is-valid");
        passField.classList.remove("is-invalid");
      }
    };
    passField.addEventListener("input", validatePassFormat);
  });

  const addressField = document.querySelector("#address");

  addressField.addEventListener("blur", function (e) {
    const fieldValue = e.target.value;

    const addressVacia = document.getElementById("address-vacia");

    if (fieldValue === "") {
      addressVacia.classList.remove("hidden");
    }
    if (fieldValue !== "") {
      addressVacia.classList.add("hidden");
    }

    const address2 = document.getElementById("address-2");

    if (fieldValue.trim().length < 2) {
      address2.classList.remove("hidden");
      addressField.classList.remove("is-valid");
      addressField.classList.add("is-invalid");
    }
    if (fieldValue.trim().length >= 2) {
      address2.classList.add("hidden");
      addressField.classList.add("is-valid");
      addressField.classList.remove("is-invalid");
    }
  });

  const countryField = document.querySelector("#country");

  countryField.addEventListener("blur", function (e) {
    const fieldValue = e.target.value;

    const countryVacio = document.getElementById("country-vacio");

    if (fieldValue === "") {
      countryVacio.classList.remove("hidden");
    }
    if (fieldValue !== "") {
      countryVacio.classList.add("hidden");
    }

    const country2 = document.getElementById("country-2");

    if (fieldValue.trim().length < 2) {
      country2.classList.remove("hidden");
      countryField.classList.remove("is-valid");
      countryField.classList.add("is-invalid");
    }
    if (fieldValue.trim().length >= 2) {
      country2.classList.add("hidden");
      countryField.classList.add("is-valid");
      countryField.classList.remove("is-invalid");
    }
  });

  const telField = document.querySelector("#telefono");

  telField.addEventListener("blur", function (e) {
    const fieldValue = e.target.value;

    const telVacio = document.getElementById("tel-vacio");

    if (fieldValue === "") {
      telVacio.classList.remove("hidden");
    }
    if (fieldValue !== "") {
      telVacio.classList.add("hidden");
    }

    const tel2 = document.getElementById("tel-2");

    if (fieldValue.trim().length < 2) {
      tel2.classList.remove("hidden");
      telField.classList.remove("is-valid");
      telField.classList.add("is-invalid");
    }
    if (fieldValue.trim().length >= 2) {
      tel2.classList.add("hidden");
      telField.classList.add("is-valid");
      telField.classList.remove("is-invalid");
    }
  });

  const fileField = document.getElementById("picture");

  fileField.addEventListener("change", (e) => {
    const fileExt = e.target.files[0].name.split(".").pop().toLowerCase();
    const aceptExt = ["jpg", "png", "gif", "jpeg"];
    const extPermitidas = document.getElementById("ext");
    if (aceptExt.includes(fileExt)) {
      fileField.classList.remove("is-invalid");
      fileField.classList.add("is-valid");
      extPermitidas.classList.add("hidden");
    }
    if (!aceptExt.includes(fileExt)) {
      fileField.classList.remove("is-valid");
      fileField.classList.add("is-invalid");
      extPermitidas.classList.remove("hidden");
    }
  });

  const dateField = document.getElementById("date");

  dateField.addEventListener("change", () => {
    const dateInput = dateField.value;

    const DATE_REGEX = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/;
    const CURRENT_YEAR = new Date().getFullYear();

    const validateDate = (birthDate) => {
      /* Comprobar los días del mes */
      const day = parseInt(birthDate.split("/")[2]);
      const month = parseInt(birthDate.split("/")[1]);
      const year = parseInt(birthDate.split("/")[0]);
      const monthDays = new Date(year, month, 0).getDate();
      if (day > monthDays) {
        return false;
      }

      /* Comprobar que el año no sea superior al actual*/
      if (year > CURRENT_YEAR) {
        return false;
      }
      return true;
    };

    if (validateDate(dateInput)) {
      dateField.classList.remove("is-invalid");
      dateField.classList.add("is-valid");
    } else {
      dateField.classList.remove("is-valid");
      dateField.classList.add("is-invalid");
    }
  });
});
