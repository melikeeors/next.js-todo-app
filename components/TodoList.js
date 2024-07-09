'use client'; // "useState" only works in client component

import React, { useState } from 'react';
import './TodoList.scss';
import './TodoList.css'

import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const addTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, itemIndex) => itemIndex !== index); //arrow function
        setTasks(newTasks);  
        
    }

    return (
        <div className='todo'>
            <h1 className='todo__title'>to do list</h1>
            <div className='todo__inputGroup'>
                <input className='todo__input' type='text' value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder='Please enter a new task'>
                </input>
                <button className='todo__addButton' onClick={addTask} >
                    <FaPlus />
                </button>
            </div>

            <div className='todo__listGroup'>
                <ul className='todo__list'>
                    {tasks.map((task, index) => (
                        <li className='todo__list-item' key={index}>
                            <input className='todo__checkbox' type='checkbox'></input>
                            {task}
                            <button className='todo__removeButton' onClick={() => removeTask(index)}>
                                <FaMinus />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

