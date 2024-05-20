import fs from 'fs';

export const camalize = (str) => {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}
export const unSLug = (str) => {
  return str
    .replace(/-/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
export const readDirectory = (directoryPath) => {
  if (!directoryPath || !fs.existsSync(directoryPath)) return [];

  return fs.readdirSync(directoryPath);
};

export const createNavItems = (directoryPath) => {
  const rootDirs= readDirectory(directoryPath);
  let navItems = [];

  rootDirs.forEach((dir) => {
    const slug = camalize(dir);

    navItems.push({
      type: 'docSidebar',
      sidebarId: `${slug}Sidebar`,
      position: 'left',
      label: unSLug(dir),
    },);
  })

  return navItems;
};

export const createSidebars = (directoryPath) => {

  const rootDirs= readDirectory(directoryPath);
  let sidebars = {};

  rootDirs.forEach((dir) => {
    const slug = camalize(dir);

    sidebars[`${slug}Sidebar`] = [{type: 'autogenerated', dirName: dir}];
  })

  return sidebars;
};
