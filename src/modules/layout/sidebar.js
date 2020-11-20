import projectList from '../objects/project-list';
import activeProject from '../active-project';

const sidebarLinks = () => {
  const linkContainer = document.createElement('div');
  linkContainer.setAttribute('id', 'link-container');
  linkContainer.classList.add('d-flex', 'flex-column', 'align-items-center');

  projectList.forEach((project, index) => {
    const link = document.createElement('a');
    link.classList.add('link');
    link.setAttribute('href', '#');
    link.onclick = () => {
      activeProject(index);
    };

    const linkCard = document.createElement('div');
    linkCard.classList.add('card');

    const linkHeader = document.createElement('div');
    linkHeader.classList.add('card-header');
    linkHeader.textContent += project.title;

    const linkBody = document.createElement('div');
    linkBody.classList.add('card-body');

    const projectDescription = document.createElement('p');
    projectDescription.textContent += project.description;

    const projectDueDate = document.createElement('p');
    projectDueDate.textContent += project.dueDate;

    linkBody.append(projectDescription, projectDueDate);
    linkCard.append(linkHeader, linkBody);
    link.appendChild(linkCard);
    linkContainer.appendChild(link);
  });
  return linkContainer;
};

const sideBar = () => {
  const sideNavigation = document.createElement('div');
  sideNavigation.classList.add('side-bar');
  sideNavigation.setAttribute('id', 'side-bar');

  sideNavigation.appendChild(sidebarLinks());

  return sideNavigation;
};

export { sideBar, sidebarLinks };