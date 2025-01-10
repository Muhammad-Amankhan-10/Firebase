
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAuth ,  createUserWithEmailAndPassword , signInWithEmailAndPassword , sendEmailVerification } 
  from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
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
