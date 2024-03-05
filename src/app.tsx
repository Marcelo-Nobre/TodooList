import { Header } from "./components/Header/header.tsx";
import styles from "./App.module.css";
// import { Task } from "./components/Task/task.tsx";
import { Task } from "./components/Task/task.tsx";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

export function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  function handleNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, newTaskText]);
    setNewTaskText("");
  }

  function handleNewTextTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
    // console.log((event.target.value));
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        {/* criar novas tarefas */}
        <div className={styles.createNewTaskContent}>
          <form onSubmit={handleNewTask} className={styles.createNewTaskForm}>
            <input
              onChange={handleNewTextTask}
              //   value={newTask}
              name="comment"
              placeholder="Deixe um comentário"
              required
            />

            <button type="submit">
              Criar <PlusCircle size={20} />
            </button>
          </form>
        </div>

        {/* contagem de tarefas */}
        <div className={styles.listTaskStrong}>
          <strong className={styles.strongTaskCreate}>
            Tarefas criadas (0)
          </strong>
          <strong className={styles.strongTaskCompleted}>
            Concluídas (0) de (0)
          </strong>
        </div>

        <div className={styles.listTask}>
          <div>
            {tasks.map((task) => (
              <Task task={task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
