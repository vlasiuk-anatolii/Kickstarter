/* eslint-disable no-undef */
import { sliderForItems } from './slideritems.js';

const svgElement = document.querySelector('.burger');
const menu = document.getElementById('menu');
const page = document.querySelector('.page');

svgElement.addEventListener('click', () => {
  svgElement.classList.toggle('active');

  const active = document.querySelector('.active');

  if (active) {
    menu.style.transform = 'translateY(0)';
    page.style.overflow = 'hidden';
  } else {
    menu.style.transform = 'translateY(-300%)';
    page.style.overflow = 'visible';
  }
});

const video = document.getElementById('video');

function playPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

const button = document.querySelector('.video__circle-button');

button.addEventListener('click', () => {
  playPause();

  if (video.paused) {
    button.style.opacity = '1';
    button.setAttribute('title', 'Press to play');
  } else {
    button.setAttribute('title', 'Press to stop');
    button.style.opacity = '0.1';
  }
});

sliderForItems('fitcha');

const arrowUp = document.querySelector('.arrow-up');

arrowUp.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

const benefits = document.getElementsByClassName('benefit');

document.addEventListener('scroll', () => {
  if ((window.scrollY / window.screenY) > 10) {
    arrowUp.style.display = 'block';
  } else {
    arrowUp.style.display = 'none';
  }
});

const menuItems = document.getElementsByClassName('menu__item');

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', () => {
    svgElement.classList.toggle('active');
    menu.style.transform = 'translateY(-300%)';
    page.style.overflow = 'visible';
  });
};

const en = document.querySelector('.header__en');
const ua = document.querySelector('.header__ua');

en.addEventListener('click', () => {
  en.classList.toggle('header__lg--active');
  ua.classList.toggle('header__lg--active');
});

ua.addEventListener('click', () => {
  ua.classList.toggle('header__lg--active');
  en.classList.toggle('header__lg--active');
});

const menuList = { ...document.querySelector('.menu__list') };

const header = document.querySelector('.header');
const boxForMenu = document.createElement('div');

boxForMenu.classList.add('box_for_menu');
boxForMenu.style.display = 'none';
boxForMenu.append(menuList);
header.append(boxForMenu);

window.addEventListener('resize', () => {
  if (window.visualViewport.width >= 768) {
    for (let i = 0; i < benefits.length; i++) {
      benefits[i].style.display = 'block';
    }
  } else {
    sliderForItems('benefit');
  }
  sliderForItems('fitcha');
}, false);

const submitButton = document.querySelector('.questions__submit-button');

submitButton.addEventListener('click', () => {
  document.querySelector('.questions__form').reset();
  alert('Data has been successfully sent!');
});
