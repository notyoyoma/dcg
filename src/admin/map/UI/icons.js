const iconNames = [
  "faEye",
  "faEyeSlash",
  "faCog",
  "faSave",
  "faSyncAlt",
  "faArrowLeft",
];
const icons = _.map(iconNames, (name)=>require(`@fortawesome/free-solid-svg-icons/${name}.js`));

export default icons;
