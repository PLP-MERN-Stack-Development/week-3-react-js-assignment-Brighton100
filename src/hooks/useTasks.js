import { useState, useEffect } from 'react';
import { fetchTasks, createTask } from '../api/tasksApi';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true);
      try {
        const data = await fetchTasks();
        setTasks(data.slice(0, 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, []);

  const addTask = async (task) => {
    try {
      const newTask = await createTask(task);
      setTasks([newTask, ...tasks]);
    } catch (err) {
      setError(err.message);
    }
  };

  return { tasks, loading, error, addTask };
};