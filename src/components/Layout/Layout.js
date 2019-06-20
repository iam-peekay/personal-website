import React from 'react';
import Helmet from 'react-helmet';
import useDarkMode from 'use-dark-mode';
import DarkModeToggle from '../Toggle/DarkModeToggle';
import styles from './Layout.module.scss';

export const ThemeContext = React.createContext('light');

const Body = ({ children }) => {
  const darkMode = useDarkMode(false);
  return (
    <>
      <DarkModeToggle darkMode={darkMode} />
      <ThemeContext.Provider value={darkMode.value ? 'dark' : 'light'}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

const Layout = ({ children, title, description }) => (
  <div className={styles.layout}>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://www.preethikasireddy.com/photo.jpg" />
      <meta property="og:site_name" content="Preethi Kasireddy" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@iam_preethi" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://www.preethikasireddy.com/photo.jpg" />
      <script src="https://cdn.convertkit.com/assets/CKJS4.js?v=21" />
    </Helmet>

    <Body>{children}</Body>
  </div>
);

export default Layout;
