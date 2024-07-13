import { createBrowserRouter } from 'react-router-dom';

import CategoryPage from '../pages/category';
import Home from '../pages/home';
import Notfound from '@root/components/error/404';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/category',
    element: <CategoryPage />,
  },
  {
    path: '*',
    element: <Notfound />,
  },
]);

export default routes;
