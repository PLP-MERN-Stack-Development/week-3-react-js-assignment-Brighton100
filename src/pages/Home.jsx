import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Home = () => {
  const { tasks, loading, error, addTask } = useContext(TaskContext);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} loading={loading} error={error} />
    </div>
  );
};

export default Home;