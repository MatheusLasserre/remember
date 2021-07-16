import React from 'react';
import styles from '../../styles/home/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link'
// import { Container } from './styles';

function navbar() {
  return (
    <div>
      <div className={styles.navBarContainer}>
        <div className={styles.navFlexContainer}>
          <div className={styles.flexItem}>           
            <Link href="#" passHref={true}>
              <Image 
                src='/assets/icons/svg/menu.svg'
                width={50}
                height={50}
                alt='icon'
                />
              </Link>
             </div>

          <div className={styles.flexItem}> 
            <Link href="#" passHref={true}>
              <Image 
                src='/assets/icons/svg/calendar.svg'
                width={50}
                height={50}
                alt='icon'
                />
              </Link>            
          </div>

          <div className={styles.flexItem + ' ' + styles.flexItemHouse}>
            <Link href="/" passHref={true}>
              <Image 
                src='/assets/icons/svg/house.svg'
                width={50}
                height={50}
                alt='icon'
                />
              </Link>            
          </div>

          <div className={styles.flexItem}>
            <Link href="#" passHref={true}>
              <Image 
                src='/assets/icons/svg/daily_routine.svg'
                width={50}
                height={50}
                alt='icon'
                />
              </Link>
          </div>

          <div className={styles.flexItem}>
            <Link href="#" passHref={true}>
              <Image 
                src='/assets/icons/svg/settings.svg'
                width={50}
                height={50}
                alt='icon'
                />
              </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default navbar;
