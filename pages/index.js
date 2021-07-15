import React from 'react';
import styles from '../styles/Home.module.css';
import Navbar from '../components/home/navbar'
import Reminder from '../components/reminder/reminders'

export default function Home() {
  return <div className={styles.container}>
    <Navbar></Navbar>
    <Reminder></Reminder>

  </div>;
}
