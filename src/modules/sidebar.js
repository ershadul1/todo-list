import projectList from './project-list';

const sidebarLinks = () => {
  const linkContainer = document.createElement('div');
  linkContainer.setAttribute('id', 'link-container');

  projectList.forEach(project => {
      const link = document.createElement('a');

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

    sideNavigation.appendChild(sidebarLinks());

    return sideNavigation;
}

export default sideBar;