import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Detail from '../../pages/Detail';
import Error404 from '../../pages/Error404';
import Home from '../../pages/Home';
import MyPage from '../../pages/MyPage';
import Search from '../../pages/Search';
import Edit from '../MyPage/Edit';
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
    </BrowserRouter>
  );
};

export default Router;
