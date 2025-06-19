export const fetchTasks = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  return response.json();
};

export const createTask = async (task) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  return response.json();
};