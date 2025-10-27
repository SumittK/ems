import React from "react";
import "../dashboard/Admindashboard.css";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AllTask() {
  const [allTask, setAllTask] = useState([]);
  const { employees } = useContext(AuthContext);

  const fectchAllTask = () => {
    const allTask = employees.flatMap((emp) =>
      emp.tasks.map((task) => ({
        ...task,
        assignedTo: emp.email,
        status: task.newTask
          ? "New Task"
          : task.Failed
          ? "Failed"
          : task.completed
          ? "Completed"
          : task.pending
          ? "Pending"
          : "Unknown",
      }))
    );
    allTask.sort((a, b) => new Date(b.date) - new Date(a.date));
    setAllTask(allTask);
  };

  useEffect(() => {
    fectchAllTask();
  }, [employees]);

  return (
    <div className="alltask-container">
      <h1>Task List</h1>
      {allTask.length === 0 ? (
        <h2>No Task Available</h2>
      ) : (
        allTask.map((task, index) => {
          const colors = [
            "#FFB6C1",
            "#ADD8E6",
            "#90EE90",
            "#FFD700",
            "#FFA07A",
            "#D8BFD8",
            "#FF69B4",
          ];
          const randomColor = colors[index];
          return (
            <div
              key={index}
              className="task"
              style={{ "--task-bg-color": randomColor }}
            >
              <h2>{task.assignedTo}</h2>
              <h3>{task.description}</h3>
              <h4>{task.status}</h4>
            </div>
          );
        })
      )}
    </div>
  );
}

export default AllTask;
