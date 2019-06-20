import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { ThemeContext } from '../../Layout/Layout';
import styles from './Menu.module.scss';

const Menu = ({ menu }) => {
  const theme = useContext(ThemeContext);
  return (
    <nav className={styles['menu']}>
      <ul className={styles['menu__list']}>
        {menu.map((item) => (
          <li className={styles['menu__list-item']} key={item.path}>
            <Link
              to={item.path}
              className={styles[`menu__list-item-link-${theme}`]}
              activeClassName={styles[`menu__list-item-link-${theme}--active`]}
              activeStyle={{ borderBottomColor: theme === 'light' ? 'black' : 'white' }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
