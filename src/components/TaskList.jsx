import TaskCard from './TaskCard';

const TaskList = ({ tasks, loading, error }) => {
  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (tasks.length === 0) return <p className="text-center text-gray-500">No tasks available.</p>;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;