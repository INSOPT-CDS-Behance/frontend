import { atom } from 'recoil';

const projectClicked = atom({
  key: 'projectClicked',
  default: false,
});

export default projectClicked;
