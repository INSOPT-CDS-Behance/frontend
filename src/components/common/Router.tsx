import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Detail from '../../pages/Detail';
import Error404 from '../../pages/Error404';
import Main from '../../pages/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
