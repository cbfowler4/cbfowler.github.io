export const hideOverflow = () => {
  const body = document.getElementsByTagName('body')[0];
  if (!body.classList.contains("single-page")) {
    body.classList.add('single-page');
  }
};

export const showOverflow = () => {
  const body = document.getElementsByTagName('body')[0];
  if (body.classList.contains("single-page")) {
    body.classList.remove('single-page');
  }
};
