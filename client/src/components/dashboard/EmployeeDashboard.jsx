import Header from "../subComponent/Header";
import TaskStatusCard from "../subComponent/TaskStatusCard";
import TaskList from "../subComponent/TaskList";
import './EmployeeDashboard.css';

const EmployeeDashboard =()=>{
    return (
        <div  className="e-dashboard">
            <Header></Header>
            <TaskStatusCard></TaskStatusCard>
            <TaskList></TaskList>
          

        </div>
    );
}



export default EmployeeDashboard;