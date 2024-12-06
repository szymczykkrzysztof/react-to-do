import { Button } from '../Button/Button';
import styles from './TodoItem.module.css';
interface Props {
  name: string;
  done: boolean;
  onDeleteButtonClick(): void;
  onDoneButtonClick(): void;
}
export function TodoItem({
  name,
  done,
  onDeleteButtonClick,
  onDoneButtonClick,
}: Props) {
  return (
    <li className={styles.item}>
      <span className={`${styles.name} ${done ? styles.done : ''}`}>
        {name}
      </span>
      {!done && <Button onClick={onDoneButtonClick}>Zrobione</Button>}
      <Button onClick={onDeleteButtonClick}>Usuń</Button>
    </li>
  );
}
