import renderAbout from './about';
import renderProjects from './projects';
import renderContact from './contact';
import renderGallery from './gallery';
import renderHome from './home';
import * as transitionsUtil from '../util/transitions_util';
import * as overflowUtil from '../util/overflow_util';
import { loadImages } from '../util/photos_loader';

const root = document.getElementById('root');
let images = [];


const getImages = () => {
  images = loadImages();
  if (location.hash.slice(2) === 'gallery') {
    renderContent();
  }
};

const renderContent = () => {
  const path = location.hash.slice(2);
  switch (path) {
    case "about":
      overflowUtil.showOverflow();
      renderAbout(root);
      break;
    case "projects":
      overflowUtil.showOverflow();
      renderProjects(root);
      break;
    case "contact":
      overflowUtil.hideOverflow();
      renderContact(root);
      break;
    case "gallery":
      overflowUtil.showOverflow();
      renderGallery(root, images);
      break;
    default:
      overflowUtil.hideOverflow();
      renderHome(root);
  }


  switch (path) {
    case '':
      transitionsUtil.moveTitleDown();
      break;
    default:
      transitionsUtil.moveTitleUp();
  }

};

window.addEventListener('hashchange', renderContent);
window.addEventListener('load', renderContent);

window.addEventListener('load', getImages);
