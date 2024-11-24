const activateLike = () => {
  const buttons = document.querySelectorAll('.card__like-icon');
  const iconsActive = document.querySelectorAll('.round-btn__icon-active');
  const icons = document.querySelectorAll('.round-btn__icon');

  buttons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      evt.preventDefault();
      button.classList.toggle('is-active');
      iconsActive.forEach((iconActive) => {
        icons.forEach((icon) => {
          if (iconActive.classList.contains('hidden')) {
            iconActive.classList.remove('hidden');
            icon.classList.add('hidden');
          } else {
            iconActive.classList.toggle('hidden');
            icon.classList.remove('hidden');
          }
        });
      });
    });
  });
};

export { activateLike };
