import styles from '../styles/ShowTask.module.css';

export default function ShowTask({filter, setFilter}) {
  return (
    <div>
      <button type="button" className={styles.show_button} aria-pressed={filter === 'All'} onClick = {() => setFilter('All')}>
        <span className="visually-hidden">Show </span>
        <span>all</span>
        <span className="visually-hidden"> tasks</span>
      </button>
      <button type="button" className={styles.show_button} aria-pressed={filter === 'Action'} onClick = {() => setFilter('Action')}>
        <span className="visually-hidden">Show </span>
        <span>Active</span>
        <span className="visually-hidden"> tasks</span>
      </button>
      <button type="button" className={styles.show_button} aria-pressed={filter === 'Complete'} onClick = {() => setFilter('Complete')}>
        <span className="visually-hidden">Show </span>
        <span>Completed</span>
        <span className="visually-hidden"> tasks</span>
      </button>
    </div>
  );
}
