import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import navbar from './modules/layout/navbar';
import { sideBar } from './modules/layout/sidebar';
import projectForm from './modules/forms/project-form';
import taskForm from './modules/forms/task-form';
import projectList from './modules/objects/project-list'

navbar();

const mainContainer = document.getElementById('container');

const secondaryContainer = document.createElement('div');
secondaryContainer.setAttribute('id', 'secondary-container');
secondaryContainer.classList.add('d-flex');

const innerContainer = document.createElement('div');
innerContainer.setAttribute('id', 'inner-container');
innerContainer.classList.add('w-100', 'd-flex', 'flex-column', 'align-items-center', 'mt-5')

secondaryContainer.append(sideBar(), innerContainer);
mainContainer.appendChild(secondaryContainer);



//projectForm();
//taskForm();

