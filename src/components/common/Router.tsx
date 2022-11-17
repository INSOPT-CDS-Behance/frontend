import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Error404 from '../../pages/Error404';
import Main from '../../pages/Main';
import MyPage from '../../pages/MyPage';
import Edit from '../MyPage/Edit';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/MyPage" element={<MyPage />}></Route>
        <Route path="/Edit" element={<Edit />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
