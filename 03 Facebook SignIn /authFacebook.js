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
// Login Instancia del provedor.
const facebookCount = new firebase.auth.FacebookAuthProvider();

const btnLogin = document.getElementById('btnLogin');
const btnSingUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');
const photo = document.getElementById('profile');
const title = document.getElementById('title');

btnLogin.addEventListener('click', () => {

    firebase.auth().signInWithPopup(facebookCount).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        console.log(errorMessage);
        // ...
      });
  })
// Actividad
firebase.auth().onAuthStateChanged( firebaseUser => {
    if (firebaseUser) {
        console.clear();
       // console.log(firebaseUser);
        photo.src = firebaseUser.photoURL;
        btnLogout.classList.remove('disabled');
        btnLogin.classList.add('disabled');
        btnSingUp.classList.add('disabled');
        title.innerText = firebaseUser.displayName;
        console.log(firebaseUser)
    } else {
        console.clear();
        console.log('No está logueado');
        btnLogout.classList.add('disabled');
        btnLogin.classList.remove('disabled');
        btnSingUp.classList.remove('disabled');
        photo.src = '';
        title.innerText = 'Iniciar session'
    }
})

const Logout = () => {
    firebase.auth().signOut();
}

btnLogout.addEventListener('click', Logout);



