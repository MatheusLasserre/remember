import React from 'react';
import styles from '../../styles/reminder/Reminder.module.css'

// import { Container } from './styles';

function reminder() {
  return <div>
      <div className={styles.reminderContainer}>
          <h1>Título do Lembrete</h1>
      </div>
  </div>;
}

export default reminder;