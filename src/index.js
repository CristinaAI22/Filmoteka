// imports
import { fetchAllMovies } from './js-files/fetchMovies';
import { fetchPopularMovies } from './js-files/carousel';
import { addToLocalStorag } from './js-files/locatStorage';
import { handleModalBtns } from './js-files/handle-modal-btns';
import { getFilterGenres, getMoviesYearFilter } from './js-files/filter';
import { fetchPopularMovieTrailer } from './js-files/fetchPopularMovieTrailer';
import { findMovie, handlePagination } from './js-files/fetchMovies';
import { fetchMovieTrailer } from './js-files/fetchMovieTrailer';
import { changeNoteColor } from './js-files/change-note-color';

fetchPopularMovieTrailer()
  .then(youtubeUrl => {
    const container = document.querySelector('.video-frame');

    const iframe = document.createElement('iframe');
    iframe.src = youtubeUrl;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.allowFullscreen = true;

    container.appendChild(iframe);
  })
  .catch(error => {
    console.error('Error:', error);
  });

const init = async () => {
  await fetchPopularMovies();
  // await fetchMovieTrailer();
  await fetchAllMovies();
  await findMovie();
  await handlePagination();
  addToLocalStorag();
  handleModalBtns();
  findMovie();
  getFilterGenres();
  getMoviesYearFilter();
};

window.addEventListener('DOMContentLoaded', init);
//dark-light-mode
const body = document.querySelector('body');
const dlBtn = document.querySelector('.dl-btn');
const iconSun = document.querySelector('.fa-sun');
const iconMoon = document.querySelector('.fa-moon');
const modal = document.querySelector('.modal');
const modalTeam = document.querySelector('.team__modal');

function store(value) {
  localStorage.setItem('darkmode', value);
}

function load() {
  const darkmode = localStorage.getItem('darkmode');

  if (darkmode === null) {
    store(false);
    iconSun.style.display = 'inline';
    iconMoon.style.display = 'none';
  } else if (darkmode === 'true') {
    body.classList.add('darkmode');
    iconSun.style.display = 'none';
    iconMoon.style.display = 'inline';
  } else if (darkmode === 'false') {
    iconSun.style.display = 'inline';
    iconMoon.style.display = 'none';
  }
}

load();
dlBtn.addEventListener('click', () => {
  body.classList.toggle('darkmode');
  iconSun.classList.add('animated');
  iconMoon.classList.add('animated');
  modal.classList.toggle('darkmode');
  modalTeam.classList.toggle('darkmode');

  store(body.classList.contains('darkmode'));

  if (body.classList.contains('darkmode')) {
    iconSun.style.display = 'none';
    iconMoon.style.display = 'inline';
  } else {
    iconSun.style.display = 'inline';
    iconMoon.style.display = 'none';
  }
  setTimeout(() => {
    iconSun.classList.remove('animated');
    iconMoon.classList.remove('anmated');
  }, 500);
});

const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const svgIcon = document.querySelector('.scroll-btn__icon ');
window.addEventListener('scroll', function () {
  if (window.scrollY > window.innerHeight / 2) {
    scrollToTopBtn.style.display = 'block';
    svgIcon.style.transform = 'rotate(180deg)';
  } else {
    scrollToTopBtn.style.display = 'none';
    svgIcon.style.transform = 'rotate(0deg)';
  }
});

scrollToTopBtn.addEventListener('click', function () {
  scrollToTop();
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
