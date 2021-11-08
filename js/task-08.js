const formRef = document.querySelector('.login-form');
const inputEmailRef = document.querySelector('input[name="email"]');
const inputPasswordRef = document.querySelector('input[name="password"]');
const btnSubmitRef = document.querySelector('button[type="submit"]');

formRef.addEventListener("submit", onHandleSubmit);


function onHandleSubmit(event){
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  const formList = `Login: ${email.value}, Password: ${password.value}`

  if (email.value === "" || password.value === "" || email.value === null|| password.value === null) {
    alert("Please fill in all the fields!");
    event.currentTarget.reset();
    return;
    
  }

  alert(formList);
  console.log(formList)
  event.currentTarget.reset();
};





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