import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import navbar from './modules/navbar';
import sideBar from './modules/sidebar';
import projectForm from './modules/project-form';
import taskForm from './modules/task-form';
import projectList from './modules/project-list'

navbar();

const mainContainer = document.getElementById('container');

const secondaryContainer = document.createElement('div');
secondaryContainer.setAttribute('id', 'secondary-container');
secondaryContainer.classList.add('d-flex');

const innerContainer = document.createElement('div');
innerContainer.setAttribute('id', 'inner-container');

secondaryContainer.append(sideBar(), innerContainer);
mainContainer.appendChild(secondaryContainer);



//projectForm();
//taskForm();

