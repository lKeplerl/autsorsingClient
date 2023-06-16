const nameField = document.getElementById("name");
const email = document.getElementById("email");

const checkbox = document.getElementById("form_agreement");

const formBtn = document.getElementsByClassName("form_btn")[0];



formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (checkbox.checked && nameField.value.length > 0 && email.value.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g)) {
    if (sessionStorage.length === 0) {
      axios.post("https://autsorsing-backend.onrender.com/leaveOrder", {
        name: nameField.value,
        email: email.value,
      });
    } else {
      axios.post("https://autsorsing-backend.onrender.com/leaveOrder", {
        name: nameField.value,
        email: email.value,
        idService: sessionStorage.getItem("service"),
      });
    }

    sessionStorage.clear();
    alert("Заявка оставлена");
  }else{
    alert("Пожалуйста, корректно заполните все поля")
  }
});
