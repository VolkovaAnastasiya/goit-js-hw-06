const formRef = document.querySelector('.login-form');

formRef.addEventListener("submit", onHandleSubmit);


function onHandleSubmit(event){
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "" ||password.value.trim() === "") {
    return alert("Please fill in all the fields!");
  }

  const formList = {email: email.value ,  password: password.value};

  console.log(formList)
  event.currentTarget.reset();
};






// const formRef = document.querySelector('.login-form');
// const inputEmailRef = document.querySelector('input[name="email"]');
// const inputPasswordRef = document.querySelector('input[name="password"]');
// function onHandleSubmit(event){
//     event.preventDefault();
//     inputEmailRef.textContent = event.currentTarget.value;
//     inputPasswordRef.textContent = event.currentTarget.value;

//     if (inputEmailRef.value === '' || inputPasswordRef.value === ''){
//         alert ("Please fill in all the fields!")
//     }
//     alert (`Login: ${inputEmailRef.value}, Password: ${inputPasswordRef.value}`);

//     event.currentTarget.reset();
// };




// function onHandleSubmit(event){
//     event.preventDefault();
//   const formElem = event.currentTarget.elements;
//   const email = formElem.email;
//   const password = formElem.password;
    
//   if (email.value === "" || password.value === "") {
//     alert ("Please fill in all the fields!");
//   }

//   alert (`Login: ${email.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// };