import styles from './Button.module.css';
interface Props {
  children: string;
  onClick(): void;
}
export function Button({ children, onClick }: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
