import { useState } from "react";
import { TasksContext } from "./tasks.context";

export function TasksProvider({ children }) {

    const addTask = (e) => {

        const [task, setTask] = useState([]);

        e.preventDefault(e, state);
        const newTask = {
            id: 'id',
            title: e,
            status: state,
            creation: new Date().toLocaleString()
        }
        setTask((prevTask) => [...prevTask, newTask]) 
    }

    return <TasksContext.Provider value={
        addTask
    }>{children}</TasksContext.Provider>
}