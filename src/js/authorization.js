import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/src/styles/main.scss';
import getRefs from './get-refs';

const firebaseConfig = {
  apiKey: 'AIzaSyDru_yvb94CLLyga06XJjVjjbcRtcd4DxY',
  authDomain: 'authentication-app-78afc.firebaseapp.com',
  databaseURL: 'https://authentication-app-78afc-default-rtdb.firebaseio.com',
  projectId: 'authentication-app-78afc',
  storageBucket: 'authentication-app-78afc.appspot.com',
  messagingSenderId: '25662515291',
  appId: '1:25662515291:web:91dceb30df0dad99c1377e',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getDatabase();
const refs = getRefs();
refs.logoutBtn.style.display = 'none';
const filmBase = [];

const instance = basicLightbox.create(
  `
  <div class="modal">
      <div class="login-container">
        <h3 class="login-container-title">Войдите</h3>
        <button id="close-modal-btn">
          <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute"><path d="m8 8 14 14M8 22 22 8" stroke="#000" stroke-width="2"/></svg>
        </button>
        <p>С помощью логина и пароля</p>
        <input type="email" placeholder="E-mail" id="login-email">
        <input type="password" placeholder="Пароль" id="login-password">
        <button id="loginBtn">Войти</button>
        <button id="login-google" class="google-btn"></button>
        <button id="openSignUpModalBtn">Зарегистрироваться</button>
      </div>
  </div>
`,
  {
    onShow: instance => {
      instance.element().querySelector('#close-modal-btn').onclick = instance.close;
    },
  },
);

const instance2 = basicLightbox.create(
  `
  <div class="modal">
  <div class="login-container">
    <h3 class="login-container-title">Зарегистрируйтесь</h3>
    <button id="close-modal-btn">X</button>
    <input type="email" placeholder="E-mail" id="sign-email">
    <input type="password" placeholder="Пароль" id="sign-password">
    <button id="signUp">Зарегистрироваться</button>
    <button id="alreadyHaveAccount"">Уже есть аккант</button>
  </div>

</div>
`,
  {
    onShow: instance => {
      instance.element().querySelector('#close-modal-btn').onclick = instance.close;
    },
  },
);

refs.openSignInModalBtn.addEventListener('click', openSigInModal);
refs.logoutBtn.addEventListener('click', logOutUser);

function openSigInModal() {
  instance2.close();
  instance.show();
  const openSignUpModalBtn = document.querySelector('#openSignUpModalBtn');
  openSignUpModalBtn.addEventListener('click', openSignUpModal);

  const loginBtn = document.querySelector('#loginBtn');
  loginBtn.addEventListener('click', loginUser);

  const loginGoogle = document.querySelector('#login-google');
  loginGoogle.addEventListener('click', loginWithGoogle);
}

function openSignUpModal() {
  instance.close();
  instance2.show();
  const alreadyHaveAccount = document.querySelector('#alreadyHaveAccount');
  alreadyHaveAccount.addEventListener('click', openSigInModal);

  const signUpBtn = document.querySelector('#signUp');
  signUpBtn.addEventListener('click', signUpUser);
}

function signUpUser() {
  let email = document.getElementById('sign-email').value;
  let password = document.getElementById('sign-password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // const user = userCredential.user;
      Notify.success('User created');
      instance2.close();
    })
    .catch(error => {
      Notify.failure('Oops, something went wrong');
      console.log(error);
    });
}

function loginUser() {
  let email = document.getElementById('login-email').value;
  let password = document.getElementById('login-password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      Notify.success('User logged');
      instance.close();
    })
    .catch(error => {
      Notify.failure('Wrong username or password');
      console.log(error);
    });
}

function loginWithGoogle() {
  signInWithPopup(auth, provider)
    .then(result => {
      showUserDetails(result.user);
      instance.close();
      Notify.success('User logged in with Google');
    })
    .catch(error => {
      Notify.failure('Oops, something went wrong');
      console.log(error);
    });
}

function logOutUser() {
  signOut(auth)
    .then(() => {
      Notify.success('User logged out');
      refs.userDetails.innerHTML = '';
      refs.openSignInModalBtn.style.display = 'block';
      refs.logoutBtn.style.display = 'none';
    })
    .catch(error => {
      Notify.failure('Oops, something went wrong');
      console.log(error);
    });
}

function showUserDetails(user) {
  if (user.photoURL) {
    refs.userDetails.innerHTML = `
  <img class="user-img" src="${user.photoURL}" width=25"px">
  <p class="user-name">${user.displayName}</p>`;
  } else {
    refs.userDetails.innerHTML = `<p class="user-email">${user.email}</p>`;
  }
}

onAuthStateChanged(auth, user => {
  if (user) {
    showUserDetails(user);
    refs.openSignInModalBtn.style.display = 'none';
    refs.logoutBtn.style.display = 'block';
    const { displayName, email, uid, photoURL } = user;
    writeUserData(displayName, email, uid, photoURL);
    // readUserData(auth);
  } else {
  }
});

function writeUserData(displayName, email, uid, photoURL) {
  set(ref(db, 'users/' + uid), {
    name: displayName,
    email: email,
    userId: uid,
    photoUrl: photoURL,
    films: ['Matrix', 'Spider-Man'],
  });
}

function readUserData(auth) {
  const userId = auth.currentUser.uid;
  return onValue(
    ref(db, '/users/' + userId),
    snapshot => {
      console.log(snapshot.val());
    },
    {
      onlyOnce: true,
    },
  );
}