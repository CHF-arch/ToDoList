import styles from '../styles/Header.module.css';
import Form from './Form';

export default function Header() {
  return (
    <div className={styles.Header}>
      <h1 className={styles.h1}>
        <a href="#" className={styles.h1}>
          To Do List
        </a>
      </h1>
      <Form />
    </div>
  );
}
