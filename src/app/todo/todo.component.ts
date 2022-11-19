import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../types/todo.type';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo = {
    todo: '',
    done: false,
  };
  @Input() index = 0;

  @Output() todoIndex = new EventEmitter<number>();

  @Output() deleteIndex = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  // logIndex() {
  //   console.log(this.index);
  // }

  toggleTodo() {
    this.todoIndex.emit(this.index);
  }

  deleteTodo() {
    this.deleteIndex.emit(this.index);
  }
}
