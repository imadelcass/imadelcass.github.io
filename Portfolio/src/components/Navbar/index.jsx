import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div className={`navbar  ${navbar && 'active'}`}>
        <div className='links'>
          <Link onClick={() => setNavbar(() => false)} to='/' href=''>
            home
          </Link>
          <Link onClick={() => setNavbar(() => false)} to='/projects' href=''>
            projects
          </Link>
          <Link onClick={() => setNavbar(() => false)} to='/' href=''>
            contact
          </Link>
          {/* <Link to='/' href=''>projects</Link> */}
        </div>
      </div>
      {/* burger menu */}
      <div className='menu'>
        <svg
          className={`ham hamRotate ham7 ${navbar && 'active'}`}
          viewBox='0 0 100 100'
          width='80'
          onClick={() => setNavbar(prev => !prev)}
        >
          <path
            className='line top'
            d='m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013'
          />
          <path className='line middle' d='m 70,50 h -40' />
          <path
            className='line bottom'
            d='m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40'
          />
        </svg>
      </div>
    </>
  );
}

export default Navbar;
