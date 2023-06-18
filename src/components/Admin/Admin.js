import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Outlet } from 'react-router-dom';
import Language from '../Header/Language';
import './Admin.scss';
import Sidebar from './Sidebar';

const Admin = (props) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className='admin-container'>
      <div className='admin-sidebar'>
        <Sidebar collapsed={collapsed} />
      </div>
      <div className='admin-content'>
        <div className='admin-header'>
          <span
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          >
            <FaBars className='leftside' />
          </span>
          <div className='rightside'>
            <Language />
            <NavDropdown title={t('navbar.settings')} id='basic-nav-dropdown'>
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Item>Log Out</NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
        <div className='admin-main'>
          <PerfectScrollbar>
            <Outlet />
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  );
};

export default Admin;
