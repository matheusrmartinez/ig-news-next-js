import styles from './styles.module.scss';
import logo from '../../../public/images/logo.svg';
import Image from 'next/Image';

export function Header(){
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt="ig.news"/>
        <nav>
          <a className={styles.active}>Home</a>
          <a href="">Posts</a>
        </nav>
      </div>
    </header>
  );
}