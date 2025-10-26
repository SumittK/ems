import React from "react";
import "../dashboard/Admindashboard.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

function CreateTask() {
  const { employees } = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const handleChange = (e) => {
    setAssignedTo(e.target.value);
  };

  const onSubmit = () => {
    validateInputs();
  };
  const validateInputs = () => {
    if (
      !taskTitle.length > 0 ||
      !date ||
      !category.length > 0 ||
      !description.length > 0 ||
      !assignedTo.length > 0
    ) {
      alert("Please fill in all fields.");
    } else {
      CreateTask();
    }
  };
  const CreateTask = () => {
    const newTask = {
      newTask: true,
      Failed: false,
      completed: false,
      pending: true,
      date: date,
      category: category,
      description: description,
    };

    const assignedEmployee = employees.find((emp) => emp.email === assignedTo);
    assignedEmployee.tasks.push(newTask);
    localStorage.setItem("employees", JSON.stringify(employees));
    alert("Task created successfully!");
    setAssignedTo("");
    setCategory("");
    setDate("");
    setDescription("");
    setTaskTitle("");
  };

  return (
    <div>
      <div className="create-task-container">
        <div class="input-container">
          <h3>Task Title</h3>
          <input
            type="text"
            placeholder="Make UI design"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <h3>Date</h3>
          <input
            type="date"
            placeholder="dd/mm/yy"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <h3>Assign To</h3>
          <select value={assignedTo} onChange={handleChange} required>
            <option value="">Select Employee</option>

           
            {employees &&
              employees.map((emp) => (
                <option key={emp.id} value={emp.email}>
                  {emp.email}
                </option>
              ))}
          </select>
          <h3>Category</h3>
          <input
            type="text"
            placeholder="dev,design,etc"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="desc-container">
          <h3>Description</h3>
          <textarea
            name=""
            id=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >
            {" "}
          </textarea>
          <button onClick={onSubmit}>Create Task</button>
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
