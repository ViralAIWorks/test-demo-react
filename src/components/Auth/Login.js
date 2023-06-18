import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiService';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action/userAction';
import { ImSpinner9 } from 'react-icons/im';
import Language from '../Header/Language';
import { useTranslation } from 'react-i18next';

const Login = (props) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = async () => {
    //validate
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error('Invalid Email!');
      return;
    }
    if (!password) {
      toast.error('Invalid Password!');
    }
    setIsLoading(true);
    //submit apis
    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      dispatch(doLogin(data));
      toast.success(data.EM);
      setIsLoading(false);
      navigate('/');
    }

    if (data && +data.EC !== 0) {
      toast.error(data.EM);
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e && e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className='login-container'>
      <div className='header'>
        <span>{t('login-page.account')}</span>
        <button
          onClick={() => {
            navigate('/register');
          }}
        >
          {t('navbar.signup')}
        </button>
        <Language />
      </div>
      <div className='title col-4 mx-auto'>Viral AI Works</div>
      <div className='welcome col-4 mx-auto'>{t('login-page.greetings')}</div>
      <div className='content-form col-4 mx-auto'>
        <div className='form-group'>
          <label>Email</label>
          <input
            type={'email'}
            className='form-control'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>{t('login-page.password')}</label>
          <input
            type={'password'}
            className='form-control'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
        </div>
        <span className='forgot-password'>{t('login-page.forgot')}</span>
        <div>
          <button className='btn-submit' onClick={() => handleLogin()} disabled={isLoading}>
            {isLoading === true && <ImSpinner9 className='loader-icon' />}

            <span> {t('login-page.loginTo')}</span>
          </button>
        </div>
        <div className='text-center'>
          <span
            className='back'
            onClick={() => {
              navigate('/');
            }}
          >
            &#60;&#60; {t('login-page.toHomepage')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
