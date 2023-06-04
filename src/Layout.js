import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import Admin from './components/Admin/Admin';
import Dashboard from './components/Admin/Content/Dashboard';
import ManageUser from './components/Admin/Content/ManageUser';
import Questions from './components/Admin/Content/Question/Questions';
import ManageQuiz from './components/Admin/Content/Quiz/ManageQuiz';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import HomePage from './components/Home/HomePage';
import DetailQuiz from './components/User/DetailQuiz';
import ListQuiz from './components/User/ListQuiz';
import Test1 from './routes/Test1';
import PrivateRoute from './routes/PrivateRoute';

const NotFound = () => {
  return (
    <div className='container mt-3 alert alert-danger'>
      404. Not found data with your current URl
    </div>
  );
};
const Layout = (props) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route
            path='users'
            element={
              <PrivateRoute>
                <ListQuiz />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path='/quiz/:id' element={<DetailQuiz />} />
        <Route
          path='admins'
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path='manage-users' element={<ManageUser />} />
          <Route path='manage-quizzes' element={<ManageQuiz />} />
          <Route path='manage-questions' element={<Questions />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='test' element={<PrivateRoute />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
};

export default Layout;
