import {modals} from './modals/init-modals.js';

const sortWrapper = document.querySelector('[data-sort="wrapper"]');
const modal = document.querySelector('[data-modal="sort"]');
const breakpointMedia = window.matchMedia('(min-width: 650px)');

const initSortFilter = () => {
  if (!sortWrapper) {
    return;
  }

  const sortButtons = document.querySelectorAll('[data-sort="button"]');

  let prevButton;

  for (let i = 0; i < sortButtons.length; i++) {
    if (sortButtons[i].classList.contains('is-active')) {
      prevButton = sortButtons[i];
      break;
    }
  }

  document.addEventListener('click', (evt) => {
    const target = evt.target;

    if (!target.closest('[data-sort="button"]')) {
      return;
    }

    prevButton.classList.remove('is-active');

    target.classList.add('is-active');
    prevButton = target;
  });

  breakpointChecker();
};

const breakpointChecker = () => {
  if (breakpointMedia.matches) {
    if (modal.classList.contains('is-active')) {
      modals.close('sort');
    }
  }

  breakpointMedia.addListener(breakpointChecker);
};

export {initSortFilter};
