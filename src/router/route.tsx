import { createBrowserRouter } from 'react-router-dom';

import Category from '../pages/category';
import Home from '../pages/home';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/category',
    element: <Category />,
  },
]);

export default routes;