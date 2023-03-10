import { NavLink, Outlet } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

import styles from './menu.module.scss';

const Menu = () => {
  return (
    <div>
      <ScrollToTop
        smooth={true}
        color="orange"
        style={{
          borderRadius: '50%',
          width: '70px',
          height: '70px',
        }}
      />

      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              <li className={styles.nav__item}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? styles.nav__link__current : styles.nav__link
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className={styles.nav__item}>
                <NavLink
                  to="/movies"
                  className={({ isActive }) =>
                    isActive ? styles.nav__link__current : styles.nav__link
                  }
                >
                  Movies
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />

      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <p className={styles.footer__text}>
            &#169; 2023 | All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Menu;
