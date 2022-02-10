import i18next from 'i18next';
import moviesMarkUp from '../js/movies-grid';
import MoviesApi from '../js/api-requests';
import getRefs from './get-refs';

const movies = new MoviesApi();
const refs = getRefs();
const signInBtn = document.querySelector('.signin-btn');
const teamLink = document.querySelector('.js-team-link');

teamLink.addEventListener('click', onTeamLinkClick);
signInBtn.addEventListener('click', onSignInBtnClick);
refs.gallery.addEventListener('click', onMovieCardClick);

function onTeamLinkClick() {
  setTimeout(() => {
    const team = document.querySelectorAll('.team-section__container [data-key]');
    console.log(team);
    // team.forEach(translateElement);
  }, 150);
}
function onMovieCardClick(e) {
  setTimeout(() => {
    const modalItems = document.querySelectorAll('.modal-card [data-key]');
    modalItems.forEach(translateElement);
  }, 150);
}
function onSignInBtnClick() {
  const signUpBtn = document.querySelector('.sign-up-btn');
  signUpBtn.addEventListener('click', () => {
    setTimeout(() => {
      const signInWindowItems = document.querySelectorAll('.modal-auth-container [data-key]');
      signInWindowItems.forEach(translateElement);
    }, 150);
  });
  setTimeout(() => {
    const signInWindowItems = document.querySelectorAll('.modal-auth-container [data-key]');
    signInWindowItems.forEach(translateElement);
  }, 150);
}

i18next.init(
  {
    lng: localStorage.getItem('lang'),
    debug: true,
    returnObjects: true,
    resources: {
      'en-US': {
        translation: {
          home: 'Home',
          'my-library': 'My library',
          'log-in': 'Log in',
          'log-out': 'Log out',
          watched: 'Watched',
          queue: 'Queue',
          'soon-in-theaters': 'soon in theaters',
          rights: '| All rights reserved |',
          developed: 'Developed with',
          students: 'by GoIT Students',
          vote: 'Vote / Vote',
          about: 'About',
          genre: 'Genre',
          popularity: 'Popularity',
          'original-title': 'Original title',
          'form-name': 'Log In',
          description: 'To log in, enter your email address and password',
          'modal-login': 'Log In',
          authorization: 'Authorization with social networks',
          'sign-up': 'Sign up',
          'sign-up-btn': 'Sign up',
          'remove-watched': 'remove from watched',
          'add-watched': 'add to watched',
          email: 'E-mail',
          password: 'Password',
          search: 'Search a movie',
          'remove-queue': 'remove from queue',
          'add-queue': 'add to queue',
          our: 'Our',
          team: 'Team',
          'dev-name': [
            'Vladimir Rudnyk',
            'Maxim Steblyna',
            'Maxim Samsonenko',
            'Olha Mashtaler',
            'Anastasiia Tyshkevych',
            'Ihor Khomenko',
            'Liudmyla Nedosheva',
            'Ihor Kozlov',
            'Yevgenii Vashchenko',
          ],
          'dev-pos': 'Developer',
        },
      },
      'uk-UA': {
        translation: {
          home: 'Головна',
          'my-library': 'Бібліотека',
          'log-in': 'Вхід',
          'log-out': 'Вихід',
          watched: 'Переглянуті',
          queue: 'Обране',
          'soon-in-theaters': 'скоро в кінотеатрах',
          rights: '| Всі права захищені |',
          developed: 'Розроблено з',
          students: 'Студентами GoIT',
          vote: 'Оцінка / Проголосувало',
          about: 'Опис',
          genre: 'Жанр',
          popularity: 'Популярність',
          'original-title': 'Оригінальна назва',
          'form-name': 'Вхід',
          description: 'Для входу, введіть адресу електронної пошти та пароль',
          'modal-login': 'Вхід',
          authorization: 'Авторизуйтесь з допомогою',
          'sign-up': 'Реєстрація',
          'sign-up-btn': 'Приєднатися',
          'remove-watched': 'видалити з переглянутих',
          'add-watched': 'додати до переглянутих',
          email: 'Пошта',
          password: 'Пароль',
          search: 'Пошук фільмів',
          'remove-queue': 'видалити з обраного',
          'add-queue': 'додати до обраного',
          our: 'Наша',
          team: 'Команда',
          'dev-name': [
            'Володимир Рудник',
            'Максим Стеблина',
            'Максим Самсоненко',
            'Ольга Машталер',
            'Анастасія Тишкевич',
            'Ігор Хоменко',
            'Людмила Недьошева',
            'Ігор Козлов',
            'Євгеній Ващенко',
          ],
          'dev-pos': 'Розробник',
        },
      },
      'ru-RU': {
        translation: {
          home: 'Главная',
          'my-library': 'Библиотека',
          'log-in': 'Вход',
          'log-out': 'Выход',
          watched: 'Просмотренные',
          queue: 'Избранное',
          'soon-in-theaters': 'скоро в кинотеатрах',
          rights: '| Все права защищены |',
          developed: 'Разработано с',
          students: 'Студентами GoIT',
          vote: 'Оценка / Проголосовало',
          about: 'Описание',
          genre: 'Жанр',
          popularity: 'Популярность',
          'original-title': 'Оригинальное название',
          'form-name': 'Вход',
          description: 'Для входа введите адрес электронной почты и пароль',
          'modal-login': 'Вход',
          authorization: 'Авторизируйтесь с помощью',
          'sign-up': 'Регистрация',
          'sign-up-btn': 'Зарегистрироваться',
          'remove-watched': 'удалить из просмотренных',
          'add-watched': 'добавить в просмотренные',
          email: 'Почта',
          password: 'Пароль',
          search: 'Поиск фильмов',
          'remove-queue': 'удалить из избранных',
          'add-queue': 'добавить в избранное',
          our: 'Наша',
          team: 'Команда',
          'dev-name': {
            'ru-Ru': 'Владимир Рудник',
            'ru-RU': 'Максим Стеблина',
            'ru-RU': 'Максим Самсоненко',
            'ru-RU': 'Ольга Машталер',
            'ru-RU': 'Анастасия Тышкевич',
            'ru-RU': 'Игорь Хоменко',
            'ru-RU': 'Людмила Недёшева',
            'ru-RU': 'Игорь Козлов',
            'ru-RU': 'Евгений Ващенко',
          },
          'dev-pos': 'Разработчик',
        },
      },
    },
  },
  function (err, t) {
    if (!localStorage.getItem('lang')) {
      i18next.changeLanguage('en-US');
    }
    updateContent();
    bindLocaleSwitcher();
  },
);

function updateContent() {
  document.querySelectorAll('[data-key]').forEach(translateElement);
}
function translateElement(element) {
  const key = element.getAttribute('data-key');
  const teamMates = [];
  // if (element.tagName === 'H3') {
  //   console.log(i18next.t(key));
  //   element.innerText = i18next.t(key);
  // }
  if (element.tagName === 'INPUT') {
    element.placeholder = i18next.t(key);
  }
  if (element.classList.contains('wathed')) {
    element.addEventListener('click', () => {
      element.classList.contains('pressed')
        ? (element.innerText = i18next.t('remove-watched'))
        : (element.innerText = i18next.t('add-watched'));
    });
  }
  if (element.classList.contains('queue')) {
    element.addEventListener('click', () => {
      element.classList.contains('pressed')
        ? (element.innerText = i18next.t('remove-queue'))
        : (element.innerText = i18next.t('add-queue'));
    });
  }
  element.innerText = i18next.t(key);
}
function bindLocaleSwitcher() {
  const switcher = document.querySelector('[data-switcher]');
  switcher.value = i18next.language;
  switcher.onchange = e => {
    const library = document.querySelector('.library-link');
    changeLng(e.target.value);
    if (!library.classList.contains('current')) {
      refs.gallery.innerHTML = '';
      movies.resetPage();
      movies.getPopularMovies().then(response => {
        moviesMarkUp(response.data.results);
      });
    }
  };
}
function changeLng(lng) {
  i18next.changeLanguage(lng);
  localStorage.setItem('lang', lng);
}

i18next.on('languageChanged', () => {
  updateContent();
});