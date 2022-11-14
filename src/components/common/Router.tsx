import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Error404 from '../../pages/Error404';
import Main from '../../pages/Main';
import Search from '../../pages/Search';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Error404 />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
