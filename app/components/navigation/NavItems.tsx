import Link from 'next/link';

const NavItems = ({ toggleSideDrawer, toggleHamburger }: any) => {
  const tabs = ['about', 'projects', 'resume'];

  return (
    <>
      <ul>
        {tabs.map((tab) => (
          <Link
            href={tab}
            key={tab}
            // getActiveProps={getActiveProps}
            onClick={() => {
              window.scrollTo(0, 0);
              toggleSideDrawer(false);
              toggleHamburger();
            }}
          >
            {tab}
          </Link>
        ))}
      </ul>
    </>
  );
};

function getActiveProps() {
  return {
    style: {
      color: 'var(--clr-4)',
    },
  };
}

export default NavItems;
