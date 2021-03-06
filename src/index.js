import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import navbar from './modules/layout/navbar';
import { sideBar } from './modules/layout/sidebar';
import { initializeLocalStorage } from './modules/helpers/local-storage';
import activeProject from './modules/active-project';

initializeLocalStorage();
navbar();

const mainContainer = document.getElementById('container');

const secondaryContainer = document.createElement('div');
secondaryContainer.setAttribute('id', 'secondary-container');
secondaryContainer.classList.add('d-flex');

const innerContainer = document.createElement('div');
innerContainer.setAttribute('id', 'inner-container');
innerContainer.classList.add('w-100', 'd-flex', 'flex-column', 'align-items-center', 'mt-5');

secondaryContainer.append(sideBar(), innerContainer);
mainContainer.appendChild(secondaryContainer);

const currentProject = localStorage.getItem('currentProject') ? localStorage.getItem('currentProject') : 0;

activeProject(currentProject);
