import React from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import { DiReact } from 'react-icons/di';
import { MdDashboard } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

import './Sidebar.scss';
import sidebarBg from '../../assets/bg2.jpg';

const Sidebar = (props) => {
  const navigate = useNavigate();
  const { image, collapsed, toggled, handleToggleSidebar } = props;

  return (
    <>
      <ProSidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint='md'
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: '24px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 14,
              letterSpacing: '1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            <DiReact size={'3em'} color={'00bfff'} />
            <span onClick={() => navigate('/')}>Viral AI Works</span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape='circle'>
            <MenuItem
              icon={<FaTachometerAlt />}
              // suffix={<span className="badge red">NEW</span>}
            >
              Dashboard
              <Link to='/admins' />
            </MenuItem>
            {/* <MenuItem icon={<FaGem />}>Components</MenuItem> */}
          </Menu>
          <Menu iconShape='circle'>
            <SubMenu
              // suffix={<span className="badge yellow">3</span>}
              // icon={<FaRegLaughWink />}
              icon={<FaGem />}
              title='Features'
            >
              <MenuItem>
                Quản lí Users
                <Link to='/admins/manage-users' />
              </MenuItem>
              <MenuItem>
                Quản lí bài Quiz
                <Link to='/admins/manage-quizzes' />
              </MenuItem>
              <MenuItem>
                Quản lí Câu Hỏi
                <Link to='/admins/manage-questions' />
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: 'center' }}>
          <div
            className='sidebar-btn-wrapper'
            style={{
              padding: '20px 24px',
            }}
          >
            <a
              href='https://github.com/ViralAIWorks/test-demo-react/tree/prod'
              target='_blank'
              className='sidebar-btn'
              rel='noopener noreferrer'
            >
              <FaGithub />
              <span
                style={{
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                }}
              >
                ViralAIWorks
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
      ;
    </>
  );
};

export default Sidebar;
