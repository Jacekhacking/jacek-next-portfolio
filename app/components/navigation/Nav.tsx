'use client';

import { useEffect, useState } from 'react';
import NavItems from './NavItems';
import Link from 'next/link';
import NextJsImage from '../NextJsImage';

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
    <div>
      <Link
        href="/"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <NextJsImage
          height={'50px'}
          width={'50px'}
          imagePath={'/logo.png'}
          alt={'test'}
        />
      </Link>

      <div
        className={hamburgerActive}
        onClick={() => {
          toggleSideDrawer();
          toggleHamburger();
        }}
      >
        <span />
        <span />
        <span />
      </div>

      {/* {sideDrawer && (
        <Backdrop
          onClick={() => {
            toggleSideDrawer();
            toggleHamburger();
          }}
        />
      )} */}
      {sideDrawer && (
        <div>
          <div>
            <NavItems
              toggleSideDrawer={toggleSideDrawer}
              toggleHamburger={toggleHamburger}
            />
          </div>
        </div>
      )}
      <div>
        <NavItems
          toggleSideDrawer={toggleSideDrawer}
          toggleHamburger={toggleHamburger}
        />
      </div>
    </div>
  );
};
export default Nav;
