import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Detail from '../../pages/Detail';
import Error404 from '../../pages/Error404';
import Home from '../../pages/Home';
import MyPage from '../../pages/MyPage';
import Search from '../../pages/Search';
import Edit from '../MyPage/Edit';

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:id" element={<Detail />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
