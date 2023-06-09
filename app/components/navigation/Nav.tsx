'use client';

import { useEffect, useState } from 'react';
import NavItems from './NavItems';
import Link from 'next/link';
import NextJsImage from '../NextJsImage';
import Backdrop from './Backdrop';
import SideDrawer from './SideDrawer';

const Nav = () => {
  //state and toggle for sideDrawer
  const [sideDrawer, setSideDrawer] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const toggleHamburger = () => {
    setHamburger((current) => !current);
  };
  const toggleSideDrawer = () => {
    setSideDrawer((current) => !current);
  };

  let hamburgerActive = hamburger ? 'hamburger-active' : '';

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setHamburger(false);
        setSideDrawer(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="nav-wrapper">
      <Link
        href="/"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <NextJsImage
          height={'80px'}
          width={'80px'}
          imagePath={'/logo.png'}
          alt={'test'}
        />
      </Link>

      <div
        className={`${hamburgerActive} hamburger`}
        onClick={() => {
          toggleSideDrawer();
          toggleHamburger();
        }}
      >
        <span />
        <span />
        <span />
      </div>

      {sideDrawer && (
        <Backdrop
          onClick={() => {
            toggleSideDrawer();
            toggleHamburger();
          }}
        />
      )}
      {sideDrawer && (
        <SideDrawer>
          <div className="nav-side-drawer">
            <NavItems
              toggleSideDrawer={toggleSideDrawer}
              toggleHamburger={toggleHamburger}
            />
          </div>
        </SideDrawer>
      )}
      <div className="nav-container">
        <NavItems
          toggleSideDrawer={toggleSideDrawer}
          toggleHamburger={toggleHamburger}
        />
      </div>
    </div>
  );
};
export default Nav;
