import React from 'react';
import styles from '../../styles/home/Topbar.module.css'

// import { Container } from './styles';

function topBar() {
  return <div>
      <div className={styles.barContainer}>
        <div className={styles.textContainer}>
            <h1>Reminder.</h1>
        </div>
      </div>
  </div>;
}

export default topBar;