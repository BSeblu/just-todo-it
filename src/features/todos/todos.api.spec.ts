import { useTodosApi } from './todos.api';

describe('todos api', () => {
  // Initialize each test
  let api: ReturnType<typeof useTodosApi>;
  beforeEach(() => api = useTodosApi());
  
  
  it('should contain 3 items', async () => {
    let todos = await api.loadTodos();
    expect(todos.length).toBe(3);
  });
  
  it('after adding a todo there should be 4 items', async () => {
    await api.addTodo({ id: "004", title: "new todo", state: 'Todo' });
    let todos = await api.loadTodos();
    expect(todos.length).toBe(4);
  });

  it ('removeTodo', async () => {
    await api.removeTodo("001");
    let todos = await api.loadTodos();
    expect(todos.length).toBe(2);
  });
  
  it('patchTodo should change the items', async () => {
    await api.addTodo({ id: "004", title: "new todo", state: 'Todo' });
    await api.patchTodo("004", { title: "renamed todo", description: "description", state: 'Done' });
    let todos = await api.loadTodos();
    let todo = todos.find(t => t.id === "004");
    expect(todo).toEqual({ id: "004", title: "renamed todo", description: "description", state: 'Done'});
  });
});