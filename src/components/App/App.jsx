import { Menu } from '../Menu/Menu';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  UserRoutes  from '../../UserRoutes';

export const App = () => {
  return (
    <div>
      <Menu />
      <UserRoutes />
      <ToastContainer autoClose={2000} />
    </div>
  );
};
