
import {
  addTask,
  toggleTask,
  removeTask
} from "./task-utils.js";

const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const emptyState = document.querySelector("#empty-state");

let tasks = [];

function render() {
  list.replaceChildren();

  for (const task of tasks) {
    const item = document.createElement("li");

    if (task.done) item.classList.add("done");

    const label = document.createElement("span");
    label.textContent = task.title;

    const toggle = document.createElement("button");
    toggle.textContent = task.done ? "Undo" : "Done";

    toggle.addEventListener("click", () => {
      tasks = toggleTask(tasks, task.id);
      render();
    });

    const remove = document.createElement("button");
    remove.textContent = "Delete";

    remove.addEventListener("click", () => {
      tasks = removeTask(tasks, task.id);
      render();
    });

    item.append(label, toggle, remove);
    list.append(item);
  }

  emptyState.hidden = tasks.length > 0;
}

form.addEventListener("submit", event => {
  event.preventDefault();
  tasks = addTask(tasks, input.value);
  input.value = "";
  render();
});

render();
