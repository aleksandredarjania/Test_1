
export function normalizeTask(value) {
  return String(value ?? "").trim();
}

export function addTask(tasks, value) {
  const title = normalizeTask(value);

  if (!title) return tasks;

  return [
    ...tasks,
    {
      id: tasks.length
        ? Math.max(...tasks.map(t => t.id)) + 1
        : 1,
      title,
      done: false
    }
  ];
}

export function toggleTask(tasks, id) {
  return tasks.map(task =>
    task.id === id
      ? { ...task, done: !task.done }
      : task
  );
}

export function removeTask(tasks, id) {
  return tasks.filter(task => task.id !== id);
}
