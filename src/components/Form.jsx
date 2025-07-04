import { useState } from 'react';
import styles from '../styles/Form.module.css';
import ShowTask from './ShowTask';
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

let nextId = 0;

export default function Form() {
  const [filter, setFilter] = useState('Action')
  const [taskName, setTaskName] = useState('');
  const [task, setTask] = useState([]);
  function AddTask() {
    if(taskName.trim() === ''){
      return;
    }
    const newTask = {
      id: nextId++,
      taskName: taskName,
      isComplete: false
    }
    setTask([...task, newTask]);
    setTaskName('');
  }
  function editTask(taskToEdit){
    const newName = window.prompt("Edit your task", taskToEdit.taskName);
    if(newName !== null && newName.trim() !== ''){
      const updatedTask = task.map(task => {
        if(task.id === taskToEdit.id){
          return {...task, taskName: newName}
        }
        return task;
      })
      setTask(updatedTask);    
    }
  }
  function completeTask(taskIdToComplete){
      setTask(task.map(task => task.id === taskIdToComplete ? {...task, isComplete: !task.isComplete}:task));
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    AddTask();
  };
  function deleteTask(taskIdToDelete){
    const updatedTask = task.filter(task => task.id !== taskIdToDelete);
    setTask(updatedTask);
  }
  const filteredTask = task.filter(task => {
    if(filter === 'Action'){
      return !task.isComplete;
    }
    if(filter === 'Complete'){
      return task.isComplete;
    }
    return true;
  })
  return (
    <div className={styles.addtask}>
        <h2>Add Task</h2>
            <label For="task" className={styles.label}></label>
            <input
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            type="text"
            name="AddTask"
            placeholder="Add Task"
            className={styles.input}
            />        
            <button
            type='submit'
            className={styles.button}
            onClick={handleSubmit}
            >
            Submit
            </button>
        <ul>
          {filteredTask.map((task) => (
            <li key={task.id}>
            <p className={styles.ToDo}>
                {task.taskName}
            </p>
            <button className={styles.mini_buttons} onClick={() => deleteTask(task.id)}><MdDelete /></button>
            <button className={styles.mini_buttons} onClick={() => editTask(task)}><MdEdit/></button>
            <button className={styles.mini_buttons} onClick={() => completeTask(task.id)}><FaCheck /></button>
            </li>
          ))}
        </ul>
      <ShowTask filter = {filter}  setFilter = {setFilter}/>
      
    </div>
  );
}
