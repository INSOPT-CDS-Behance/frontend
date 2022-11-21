import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Detail from '../../pages/Detail';
import Error404 from '../../pages/Error404';
import Main from '../../pages/Main';
import MyPage from '../../pages/MyPage';
import Edit from '../MyPage/Edit';
import Home from '../../pages/Home';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Main />} />
        <Route path="/MyPage" element={<MyPage />}></Route>
        <Route path="/Edit" element={<Edit />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
