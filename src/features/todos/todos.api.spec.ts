import { loadTodos, initTodos, addTodo, patchTodo } from './todos.api';

describe('todos api', () => {

  describe('uninitialized state', () => {
    it('should be undefined', async () => {
      let todos = await loadTodos();
      expect(todos).toBeUndefined();
    });
  });

  describe('initialized state', () => {
    beforeEach(initTodos);
    
    it('should contain 3 items', async () => {
      let todos = await loadTodos();
      expect(todos.length).toBe(3);
    });
    
    it('after adding a todo there should be 4 items', async () => {
      await addTodo({ id: "004", title: "new todo", state: 'Todo' });
      let todos = await loadTodos();
      expect(todos.length).toBe(4);
    })
    
    it('patchTodo should change the items', async () => {
      await addTodo({ id: "004", title: "new todo", state: 'Todo' });
      await patchTodo("004", { title: "renamed todo", description: "description", state: 'Done' });
      let todos = await loadTodos();
      let todo = todos.find(t => t.id === "004");
      expect(todo).toEqual({ id: "004", title: "renamed todo", description: "description", state: 'Done'});
    });
  });
});