import { Trash } from "phosphor-react";
import styles from "./task.module.css";

interface TaskProps {
  task: string;
}

export function Task({ task }: TaskProps) {
  return (
    <div className={styles.taskContent}>
      {/* renderiza as tarefas */}
      <div className={styles.task}>
        <input className={styles.inputCheckboxTask} type="checkbox" value="" />
        <p>{task}</p>
        <button>
          <Trash size={15} />
        </button>
      </div>
    </div>
  );
}
