import { Component, OnInit } from '@angular/core';
import { Todo } from './types/todo.type';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'todo-App';

  ngOnInit(): void {
    const data = localStorage.getItem('todos');
    if (data !== '' && data !== null) this.todos = JSON.parse(data);
  }

  todos: Todo[] = [
    {
      todo: 'Einkaufen',
      done: false,
    },
    {
      todo: 'TypeScript lernen',
      done: true,
    },
    {
      todo: 'Angular Lernen',
      done: false,
    },
    {
      todo: 'Angular App erstellen',
      done: false,
    },
    {
      todo: 'Lesen',
      done: false,
    },
  ];

  newTodo = '';

  setTodo(event: KeyboardEvent) {
    this.newTodo = (event.target as HTMLInputElement).value;
  }

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push({ todo: this.newTodo, done: false });
    }
    this.storeTodos();
  }

  countOpenTodos() {
    const done = this.todos.filter((item) => {
      return !item.done;
    });

    return done;
  }

  toggleTodo(index: number) {
    this.todos[index].done = !this.todos[index].done;
    this.storeTodos();
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.storeTodos();
  }

  storeTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
