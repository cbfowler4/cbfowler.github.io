import renderAbout from './about';
import renderProjects from './projects';
import renderContact from './contact';
import renderGallery from './gallery';

const root = document.getElementById('root');


const renderContent = () => {
  const path = location.hash.slice(2);
  switch (path) {
    case "about":
      renderAbout(root);
      break;
    case "projects":
      renderProjects(root);
      break;
    case "contact":
      renderContact(root);
      break;
    case "gallery":
      renderGallery(root);
      break;
    default:
  }
};

window.addEventListener('hashchange', renderContent);
window.addEventListener('load', renderContent);
