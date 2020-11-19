import projectList from '../objects/project-list';
import activeProject from '../active-project';

const sidebarLinks = () => {
  const linkContainer = document.createElement('div');
  linkContainer.setAttribute('id', 'link-container');

  projectList.forEach((project, index) => {
      const link = document.createElement('a');
      link.onclick = () => {
        activeProject(index);
      }
      const linkTitle = document.createElement('p');
      linkTitle.textContent += project.title;

      link.appendChild(linkTitle);
      linkContainer.appendChild(link);
  })
  return linkContainer;
}

const sideBar = () => {
    const sideNavigation = document.createElement('div');
    sideNavigation.classList.add('side-bar');
    sideNavigation.setAttribute('id', 'side-bar');

    sideNavigation.appendChild(sidebarLinks());

    return sideNavigation;
}

export { sideBar, sidebarLinks };