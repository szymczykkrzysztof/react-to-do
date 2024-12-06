import { MouseEventHandler } from 'react';
import styles from './Button.module.css';
interface Props {
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}
export function Button({ children, onClick }: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
