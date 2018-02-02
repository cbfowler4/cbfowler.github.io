export const moveTitleUp = () => {
  const title = document.getElementById('title');
  if (title.classList.contains('welcome-header')) {
    title.classList.remove('welcome-header');
    title.classList.add('main-header');
  }
};

export const moveTitleDown = () => {
  const title = document.getElementById('title');
  title.classList.add('welcome-header');
  title.classList.remove('main-header');
};
