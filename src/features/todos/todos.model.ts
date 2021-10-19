export type Todo = { 
  id: string;
  title: string;
  description?: string;
  state: 'Todo' | 'InProgress' | 'Done';
};