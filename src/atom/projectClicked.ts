import { atom } from 'recoil';
// import { recoilPersist } from 'recoil-persist';

const projectClicked = atom({
  key: 'projectClicked',
  default: false,
});

// const { persistAtom } = recoilPersist();

// const projectClicked = atom({
//   key: 'projectClicked',
//   default: {
//     isClicked: false,
//   },
//   effects_UNSTABLE: [persistAtom],
// });
// const projectClicked = atom({
//   key: 'projectClicked',
//   default: {
//     searchHoverClicked: false,
//     detail1HoverClicked: false,
//     detail2HoverClicked: false,
//   },
// });

export default projectClicked;
