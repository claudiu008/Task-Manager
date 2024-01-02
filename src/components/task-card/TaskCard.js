import "./TaskCard.css";

function TaskCard() {
  const taskID = "T-1";

  return (
    <div className="card-wrapper">
      <div className="card-header">
        <p className="task-id">{taskID}</p>
        <div className="badge">
          <p>Todo</p>
        </div>
      </div>
      <div className="card-content">
        <p>Create a Design System for Enum Workspace.</p>
      </div>
      <div className="card-footer">
        <div className="due-date">
          <p>Due Date</p>
          <p>24/ 01 /2021</p>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
