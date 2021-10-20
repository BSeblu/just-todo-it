import { Todo } from './todos.model'
import { delay } from '../../app/utilities'

/**
 * Provides access to the todos api. At this time, this is rather an in-memory mock backend.
 * It uses local state, so each call to the function uses its own copy of the data.
 * @returns methods to access the todos api
 */
export function useTodosApi() {
  let todos: Todo[] = [
    { id: "001", title: "Do This", description: "BlaBlaBla", state: 'Done' },
    { id: "002", title: "Do That", state: 'InProgress'},
    { id: "003", title: "Repeat", state: 'Todo'}
  ];

  return {
    loadTodos: async () => delay(() => todos),
    addTodo: async (todo: Todo) => delay(() => todos = [...todos, todo ]),
    removeTodo: async (id: string) => delay(() => todos = todos.filter(t => t.id !== id)),
    patchTodo: async (id: string, patch: Partial<Todo>) => delay(() => todos = todos.map(t => t.id == id ? { ...t, ...patch } : t))
  }
}