import React from 'react';
import styles from './Toggle.module.scss';

const Toggle = ({ checked, onChange }) => (
  <div className={styles['wrapper']}>
    <div className={styles['toggle']}>
      <input
        className={styles['toggle-input']}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <div className={styles['toggle-bg']} />
      <div className={styles['toggle-switch']}>
        <div className={styles['toggle-switch-figure']} />
        <div className={styles['toggle-switch-figureAlt']} />
      </div>
    </div>
  </div>
);

export default Toggle;
