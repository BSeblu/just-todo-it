import { Todo } from './todos.model'

// Utilities
function wait(ms: number)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * delays the function execution, e.g. to simulate network latency
 * @param produceValue function to produce the value
 * @returns the produced value
 */
async function delay<T>(produceValue: () => T) {
await wait(0);
  return produceValue();
}


let todos: Todo[];

export function initTodos() {
  todos = [
    { id: "001", title: "Do This", description: "BlaBlaBla", state: 'Done' },
    { id: "002", title: "Do That", state: 'InProgress'},
    { id: "003", title: "Repeat", state: 'Todo'}
  ];
}

export async function loadTodos() {
  return delay(() => todos);
}

export async function addTodo(todo: Todo) {
  return delay(() => todos = [...todos, todo ]);
}

export async function removeTodo(id: string) {
  return delay(() => todos = todos.filter(t => t.id !== id))
}

export async function patchTodo(id: string, patch: Partial<Todo>) {
  return delay(() => todos = todos.map(t => t.id === id ? { ...t, ...patch} : t));
}