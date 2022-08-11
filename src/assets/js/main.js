// Import all plugins
import * as bootstrap from 'bootstrap';

// Or import only needed plugins
import {
  Tooltip as Tooltip,
  Toast as Toast,
  Popover as Popover,
} from 'bootstrap';

// Or import just one
// import Alert as Alert from '../node_modules/bootstrap/js/dist/alert';

addEventListener('scroll', () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.7;
  const skills = document.querySelector('.txtSkills');
  const contact = document.querySelector('.txtFooter');

  if (windowTop > skills.offsetTop) {
    skills.classList.remove('opacity-0');
    skills.classList.add('animate__animated');
    skills.classList.add('animate__fadeInLeft');
  } else {
    skills.classList.add('opacity-0');
    skills.classList.remove('animate__animated');
    skills.classList.remove('animate__fadeInLeft');
  }
  if (windowTop > contact.offsetTop) {
    contact.classList.remove('opacity-0');
    contact.classList.add('animate__animated');
    contact.classList.add('animate__fadeInLeft');
  } else {
    contact.classList.add('opacity-0');
    contact.classList.remove('animate__animated');
    contact.classList.remove('animate__fadeInLeft');
  }
});
