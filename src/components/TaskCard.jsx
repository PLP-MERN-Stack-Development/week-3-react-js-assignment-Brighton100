const TaskCard = ({ task }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
      <p className="text-sm text-gray-600">
        Status: {task.completed ? 'Completed' : 'Pending'}
      </p>
    </div>
  );
};

export default TaskCard;