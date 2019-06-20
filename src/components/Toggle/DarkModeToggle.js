import React from 'react';
import Toggle from '.';
import styles from './Toggle.module.scss';

const DarkModeToggle = ({ darkMode }) => (
  <div className={styles['toggle-container']}>
    <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
  </div>
);

export default DarkModeToggle;
