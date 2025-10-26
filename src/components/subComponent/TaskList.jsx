import "./TaskList.css";
import { useContext ,useEffect} from "react";
import { AuthContext } from "../../context/AuthProvider";

const TaskList = () => {

  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    loggedInUser.tasks.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [loggedInUser]);

  return (
    <div className="tasklist-container">
      {loggedInUser.tasks.length === 0 ? (
        <h2>No Task Available</h2>
      ) : ( 
        loggedInUser.tasks.map((task, index) => {
          const colors = [
            "#FFB6C1",
            "#ADD8E6",
            "#90EE90",
            "#FFD700",
            "#FFA07A",
            "#D8BFD8",
            "#FF69B4",
          ];
          const randomColor = colors[index % colors.length];
          return (
            <div className="tasklist-card" key={index} style={{ "--taskList-bg-color": randomColor }}>
              <div className="task-header">
                <h3 className="priority">High</h3>
                <h4 className="task-date">{task.date}</h4>
              </div>
              <h2 className="task-title">{task.category}</h2>
              <p className="task-desc">{task.description}</p>
            </div>
          );
        })
      )}

      {/* <div className='tasklist-card voilet' >
            <TaskListContent/>
            </div>

            <div className='tasklist-card magenta' >
            <TaskListContent/>
            </div>

            <div className='tasklist-card green' >
            <TaskListContent/>
            </div>
 */}
    </div>
  );
};

export default TaskList;

const TaskListContent = () => {
  return (
    <>
      <div className="task-header">
        <h3 className="priority">High</h3>
        <h4 className="task-date">20 Feb 2025</h4>
      </div>
      <h2 className="task-title"> Make a Youtube Video</h2>
      <p className="task-desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        distinctio id voluptatem, sed iure itaque, natus maxime vero et dicta
        explicabo laboriosam earum nisi labore, possimus excepturi magni quis!
        Harum.
      </p>
    </>
  );
};
