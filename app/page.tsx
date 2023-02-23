import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to GAMO MIQ</h1>

        <p className={styles.description}>
          Unleash the Power of Norwegian Search - All Engines in One Place!
        </p>
      </main>

      <footer className={styles.footer}>
        Unleash the Power of Norwegian Search - All Engines in One Place!
      </footer>
    </div>
  );
}
