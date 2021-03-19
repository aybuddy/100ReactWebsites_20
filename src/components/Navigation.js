import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/navigation.scss';

const Navigation = () => {
  return (
    <nav>
      <div className='container'>
        <div className='nav-columns'>
          <div className='nav-column'>
            <div className='nav-label'>Menu</div>
            <ul className='nav-links'>
              <li>
                <NavLink to='/case-studies' exact>
                  Case Studies
                </NavLink>
              </li>
              <li>
                <NavLink to='/approach' exact>
                  Approach
                </NavLink>
              </li>
              <li>
                <NavLink to='/services' exact>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to='/about-us' exact>
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='nav-column'>
            <div className='nav-label'>Contact</div>
            <div className='nav-infos'>
              <ul className='nav-info'>
                <li className='nav-info-label'>Email</li>
                <li>
                  <NavLink to='/contact' exact>
                    Get in touch with us
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/audit' exact>
                    Get a free audit
                  </NavLink>
                </li>
              </ul>
              <div className='nav-info'>
                <div className='nav-info-label'>Headquarters</div>
                <li>Route du Jura 49</li>
                <li>1700 Fribourg</li>
                <li>Switzerland</li>
              </div>
              <div className='nav-info'>
                <div className='nav-info-label'>Phone</div>
                <li>+41 (0) 75 510 28 70</li>
              </div>
              <div className='nav-info'>
                <div className='nav-info-label'>Legal</div>
                <li>Privacy and Cookies</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
