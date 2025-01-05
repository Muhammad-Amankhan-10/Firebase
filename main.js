
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAuth ,  createUserWithEmailAndPassword , signInWithEmailAndPassword , sendEmailVerification } 
  from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAjtz35pEFQj-N9S0U0gV5k2rREw_T5aQU",
    authDomain: "my-first-login-and-signu-5fe01.firebaseapp.com",
    projectId: "my-first-login-and-signu-5fe01",
    storageBucket: "my-first-login-and-signu-5fe01.firebasestorage.app",
    messagingSenderId: "228356812998",
    appId: "1:228356812998:web:f33ae7415ec9a73ec867c7",
    measurementId: "G-286GNJZ5EQ"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();


let registeres_btn = document.getElementById("registeres_btn");
registeres_btn.addEventListener("click", function () {
   let email = document.getElementById("email");
   let password = document.getElementById("password");
createUserWithEmailAndPassword(auth, email.value, password.value)
 .then((userCredential) => {
const user = userCredential.user;
console.log("user==>", user);
sendEmailVerification(auth.currentUser)
  .then(() => {
    console.log("Email send hogai hai");
  });
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   console.log("error=>", errorMessage);  
 });
}); 


let login_btn = document.getElementById("login_btn");
login_btn.addEventListener("click", function () {
   let loginemail = document.getElementById("loginemail");
   let loginpassword = document.getElementById("loginpassword");
   const auth = getAuth();
   signInWithEmailAndPassword(auth, loginemail.value, loginpassword.value)
     .then((userCredential) => {
       const user = userCredential.user;
       console.log("user==>", user);
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log("error=>", errorMessage);
     });

});