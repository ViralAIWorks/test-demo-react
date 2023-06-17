import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { doLogout } from '../../redux/action/userAction';
import { logout } from '../../services/apiService';

const Header = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const account = useSelector((state) => state.user.account);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };
  const handleRegister = () => {
    navigate('/register');
  };

  const handleLogOut = async () => {
    let res = await logout('account.email', account.refresh_token);
    if (res && res.EC === 0) {
      //clear data redux
      dispatch(doLogout());
      navigate('/login');
    } else {
      toast.error(res.EM);
    }
  };

  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <NavLink style={{ cursor: 'pointer' }} className='navbar-brand' to='/'>
          Viral AI Works
        </NavLink>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink to='/' className='nav-link'>
              Home
            </NavLink>
            <NavLink to='/users' className='nav-link'>
              User
            </NavLink>
            <NavLink to='/admins' className='nav-link'>
              Admin
            </NavLink>
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">User</Nav.Link>
            <Nav.Link href="admins">Admin</Nav.Link> */}
          </Nav>
          <Nav>
            {isAuthenticated === false ? (
              <>
                <button
                  className='btn-login'
                  onClick={() => {
                    handleLogin();
                  }}
                >
                  Log in
                </button>
                <button
                  className='btn-signup'
                  onClick={() => {
                    handleRegister();
                  }}
                >
                  Sign up
                </button>
              </>
            ) : (
              <NavDropdown title='Settings' id='basic-nav-dropdown'>
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleLogOut()}>Log Out</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
