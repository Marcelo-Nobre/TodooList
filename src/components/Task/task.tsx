// import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from "phosphor-react";
import styles from "./task.module.css";

export function Task() {
  // const [tasks, setTasks] = useState(['']);

  // const [newTaskText, setNewTaskText] = useState('');

  return (
    <div className={styles.taskContent}>
      <form className={styles.taskForm}>
        <input name="comment" placeholder="Deixe um comentário" required />

        <footer>
          <button type="submit">Criar <PlusCircle size={20} /></button>
        </footer>
      </form>
    </div>
  );
}
