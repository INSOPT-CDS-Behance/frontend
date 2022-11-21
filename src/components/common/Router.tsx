import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Error404 from '../../pages/Error404';
import Home from '../../pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
