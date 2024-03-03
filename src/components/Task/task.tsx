import { Trash } from "phosphor-react";
import styles from "./task.module.css";
import { useState } from "react";

// export interface TaskProps {
//     task: {
//         id: number;
//     }
// }

// interface TaskProps {
//     task: TaskType;
//    }

export function Task( ) {
    const [taskContainer, setTaskContainer] = useState(['Fazer café']);
    const [newTaskText, setNewTaskText] = useState('');

        function handleNewTask(event: React.FormEvent) {
            event.preventDefault();
            setTaskContainer([...taskContainer, newTaskText]);
            setNewTaskText('');
        }
    return (
        <div className={styles.taskContent}>
            <input onSubmit={handleNewTask} className={styles.inputCheckboxTask} type="checkbox" value="" />
            <p>
                {taskContainer.map(task=> {

                })}
            </p>
            <button title="Deletar comentário">
                <Trash size={15} />
            </button>
        </div>
    );
}
