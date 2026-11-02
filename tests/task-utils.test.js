
import test from "node:test";
import assert from "node:assert/strict";

import {
  normalizeTask,
  addTask,
  toggleTask,
  removeTask
} from "../src/task-utils.js";

test("Normalize task", () => {
  assert.equal(normalizeTask("  Study  "), "Study");
});

test("Add task", () => {
  const result = addTask([], "Study");
  assert.equal(result[0].title, "Study");
});

test("Reject empty task", () => {
  const tasks = [];
  assert.equal(addTask(tasks, " "), tasks);
});

test("Toggle task", () => {
  const tasks = [{ id: 1, title: "Study", done: false }];
  assert.equal(toggleTask(tasks, 1)[0].done, true);
});

test("Remove task", () => {
  const tasks = [{ id: 1, title: "Study", done: false }];
  assert.equal(removeTask(tasks, 1).length, 0);
});
