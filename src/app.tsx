import { Header } from "./components/Header/header.tsx";
import styles from "./App.module.css";
import { Task } from "./components/Task/task.tsx";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      <Task/>
      </div>
    </div>
  );
}
