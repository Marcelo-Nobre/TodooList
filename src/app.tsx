import { Header } from "./components/Header/header.tsx";
import styles from "./App.module.css";
// import { Task } from "./components/Task/task.tsx";
import { PlusCircle } from "phosphor-react";
import { Task } from "./components/Task/task.tsx";

// const tasks = [
//     {
//         id: 1,
//     },
// ];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.createNewTaskContent}>
          <form className={styles.createNewTaskForm}>
            <input name="comment" placeholder="Deixe um comentário" required />

            <footer>
              <button type="submit">
                Criar <PlusCircle size={20} />
              </button>
            </footer>
          </form>
        </div>

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
           {/* {tasks.map(task =>{
                return <Task key={task.id}/>
           })} */}

           <Task/>
          </div>
        </div>
      </div>
    </div>
  );
}
