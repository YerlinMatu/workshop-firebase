// Initialize Firebase
const config = {
    apiKey: "AIzaSyBDcsSX-as9jvH5V61Se2UO2FNXbYhC60Q",
    authDomain: "productlist-8e44c.firebaseapp.com",
    databaseURL: "https://productlist-8e44c.firebaseio.com",
    projectId: "productlist-8e44c",
    storageBucket: "productlist-8e44c.appspot.com",
    messagingSenderId: "588831885554"
};

firebase.initializeApp(config);

const btnLogin = document.getElementById('btnLogin');
const btnSingUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');


const Login =  () => {
   const email = document.getElementById('txtEmail').value;
   const pass = document.getElementById('txtPass').value;
   const auth = firebase.auth();
   auth.signInWithEmailAndPassword(email, pass)
   .catch(e => alert(TypeError(e.message) ));
}

const SignUp = () => {
   const email = document.getElementById('txtEmail').value;
   const pass = document.getElementById('txtPass').value;
   const auth = firebase.auth();
   const promise = auth.createUserWithEmailAndPassword(email, pass);
   promise.catch(e => alert(e.message)); 
}

const Logout = () => {
    firebase.auth().signOut();
}

//Add Listener of activity.
firebase.auth().onAuthStateChanged( firebaseUser => {
    if (firebaseUser) {
        console.clear();
        console.log(firebaseUser);
        btnLogout.classList.remove('disabled');
    } else {
        console.clear();
        console.log('No está logueado');
        btnLogout.classList.add('disabled');
    }
}) 


btnLogin.addEventListener('click', Login);
btnSingUp.addEventListener('click', SignUp);
btnLogout.addEventListener('click', Logout);