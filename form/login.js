const firebaseConfig = {
  apiKey: "AIzaSyCKOENQ-BhVfGgW8N4bDu339JYQjSZCuyU",
  authDomain: "quiz-login-2f3cd.firebaseapp.com",
  projectId: "quiz-login-2f3cd",
  storageBucket: "quiz-login-2f3cd.appspot.com",
  messagingSenderId: "170616820997",
  appId: "1:170616820997:web:8bbe4a0d60b83869a1d36c",
  measurementId: "G-ME5EKDM1KB"
};

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     //const uid = user.uid;

//     document.getElementById("user_div").style.display = "initial";
//     document.getElementById("login_div").style.display = "none";
    
//     // ...
//   } else {
//     // User is signed out
//     document.getElementById("user_div").style.display = "none";
//     document.getElementById("login_div").style.display = "initial";
//     // ...
//   }
// });



// function login()
// {
//     var inputEmail= document.getElementById("inputEmail").value;
//     var inputPassword= document.getElementById("inputPassword").value;



//     //window.alert(inputEmail+' & '+inputPassword);
//     //npm install -g firebase-tools


// }
// var datab = firebase.database().ref('data');

// function signup()
// {
//   //console.log("hi");
//   //alert("nicfe");
//   var inputEmail= document.getElementById("inputEmail").value;
//   var inputPassword= document.getElementById("inputPassword").value;

//     firebase.auth().createUserWithEmailAndPassword(inputEmail, inputPassword).then(function(){

//     }).catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
// }

// const auth = firebase.auth();
// function Signin()
// {
//   var inputEmail= document.getElementById("inputEmail").value;
//   var inputPassword= document.getElementById("inputPassword").value;
//   const promise=auth.signInWithEmailAndPassword(inputEmail, inputPassword);
//   promise.catch(e => alert(e.msg)); 
//   window.open("https://www.google.com","_self");
// }

// document.getElementById('form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   var userInfo = datab.push();
//   userInfo.set({
//       name: getId('imputName'),
//       email : getId('inputEmail'),
//       password : getId('inputPassword')
//   });
//   alert("Successfully Signed Up");
//   console.log("sent");
//   document.getElementById('form').reset();
// });
// function  getId(id){
//   return document.getElementById(id).value;
// }


  var firebaseConfig = {

//firebase config stuff

  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  function signup(){
            alert("lol");
           var email = document.getElementById("inputEmail");
           var password = document.getElementById("inputPassword");
           const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert(e.message));
            alert("Signed Up");

        }

        

        

        

        function signIn(){

                

                var email = document.getElementById("email");

                var password = document.getElementById("password");

                

                const promise = auth.signInWithEmailAndPassword(email.value, password.value);

                promise.catch(e => alert(e.message));

                

                

                

                

        }

        

        

        function signOut(){

                

                auth.signOut();

                alert("Signed Out");

                

        }

        

        

        

        auth.onAuthStateChanged(function(user){

                

                if(user){

                        

                        var email = user.email;

                        alert("Active User " + email);

                        

                        //Take user to a different or home page


                        //is signed in

                        

                }else{

                        

                        alert("No Active User");

                        //no user is signed in

                }

                

                

                

        });