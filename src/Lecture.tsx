import React, { useState, useRef, useEffect } from 'react';

export type Tasks = {
    id: number,
    name: string,
    status: boolean
};

export const TaskStatus = () => {
    const [input, newInput] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [tasks, setTasks] = useState<Tasks[]>([]);

    const handleChange = (event:any) => {
        newInput(event.target.value);
    }
    const handleClick = () => {
        if(input !== ""){
            setTasks([...tasks, {
                id: tasks.length,
                name: input,
                status: false
            }])
            newInput("");
        }
        else{
            alert("NO INPUT!!!");
        }
    };

    const statusChange = (id: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
            task.id === id ?{...task, status: !task.status} : task
            )
        )
    }

    return(
        <>{
            <div>
            <input type="text" name="task" placeholder="TODO" value={input} onChange={handleChange}/>
            <button onClick={handleClick}>ADD</button>
            <ul>
                {tasks.map(task=> (
                    <li key={task.id}>Task ID: {task.id} Task: {task.name} Done: {String(task.status)}<input type="checkbox" checked={isChecked} onChange={() => setIsChecked((prev) => !prev)}></input></li>
                ))}
            </ul>
            <button onClick={() => statusChange}>全部表示</button>
            <button>未完了のみ表示</button>
            <button>完了のみ表示</button>
            </div>
        }</>
    );
};