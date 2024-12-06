import { useState } from 'react';
import { Button } from '../Button/Button';
import styles from './Form.module.css';
interface Props {
  onFormSubmit(inputValue: string): void;
}
export function Form({ onFormSubmit }: Props) {
  const [inputValue, setInputValue] = useState('');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onFormSubmit(inputValue);
      }}
      className={styles.form}
    >
      <input
        className={styles.input}
        type="text"
        name=""
        id=""
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <Button onClick={() => {}}>Dodaj</Button>
    </form>
  );
}
