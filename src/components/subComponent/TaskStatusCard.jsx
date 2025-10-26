import React from 'react';
import './TaskStatuscard.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function TaskStatusCard() {
const { loggedInUser } = useContext(AuthContext);
    return (
        <div className='status-card'>
            <div className="grid-item blue">

                <h2>{loggedInUser.tasks.filter(task=> task.newTask).length}</h2>

                <h3>New Task</h3>

            </div>
            <div className="grid-item green">
                <h2>{loggedInUser.tasks.filter(task=> task.completed).length}</h2>

                <h3>Completed</h3>

            </div>
            <div className="grid-item yellow">
                <h2>{loggedInUser.tasks.filter(task=> task.pending).length}</h2>

                <h3>Pending</h3>
            </div>
            <div className="grid-item orange">
                <h2>{loggedInUser.tasks.filter(task=> task.failed).length}</h2>

                <h3>Failed</h3>
            </div>

        </div>
    )
}

export default TaskStatusCard
