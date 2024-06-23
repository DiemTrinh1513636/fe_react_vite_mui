import { createBrowserRouter } from 'react-router-dom';

import CategoryPage from '../pages/category';
import Home from '../pages/home';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/category',
    element: <CategoryPage />,
  },
]);

export default routes;
