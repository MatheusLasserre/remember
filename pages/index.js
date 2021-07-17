import React from 'react';
import styles from '../styles/Home.module.css';
import Navbar from '../components/home/navbar';
import Reminder from '../components/reminder/reminder';
import Topbar from '../components/home/topbar';

export default function Home() {
  return <div className={styles.container}>
    <Topbar></Topbar>
    <Navbar></Navbar>
    <Reminder></Reminder>

  </div>;
}
