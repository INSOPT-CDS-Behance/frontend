import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Detail from '../../pages/Detail';
import Error404 from '../../pages/Error404';
import Home from '../../pages/Home';
import MyPage from '../../pages/MyPage';
import Search from '../../pages/Search';
import Edit from '../MyPage/Edit';
<<<<<<< HEAD
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
=======

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/edit" element={<Edit />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:id" element={<Detail />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </RecoilRoot>
>>>>>>> a61ffe0ab532044c73cfe89c480be3d79e363808
    </BrowserRouter>
  );
};

export default Router;
