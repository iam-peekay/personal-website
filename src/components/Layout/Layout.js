import React from 'react';
import Helmet from 'react-helmet';
import styles from './Layout.module.scss';

const Layout = ({ children, title, description }) => (
  <div className={styles.layout}>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <script src="https://cdn.convertkit.com/assets/CKJS4.js?v=21"></script>
    </Helmet>
    {children}
  </div>
);

export default Layout;