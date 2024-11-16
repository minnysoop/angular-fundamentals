import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: ` 
    <h1>Building a TODO List</h1> 
    <p>Items: {{numOfItems()}}</p>
    @for (item of todos(); track item.id) {
      <label 
        [ngStyle]="{'text-decoration': item.completed ? 'line-through' : 'none'}" 
      >{{ item.title }}
      <input 
        type="checkbox" 
        [checked]="item.completed"
        (change)="updateTodo(item)"
      />
    </label>
      
    }
  `,
  styles: `label { display: block }`,
})
export class AppComponent {
  todos = signal<Todo[]>([
    {
      id: 1,
      title: "Learn Angular",
      completed: false,
    },
    {
      id: 2,
      title: "Learn TypeScript",
      completed: false,
    },
    {
      id: 3,
      title: "Learn RxJS",
      completed: false,
    },
  ]);
  
  numOfItems = computed(() => {
    let count = 0;
    for (let i = 0; i < this.todos().length; i++) {
      if (!this.todos()[i].completed) count++;
    }
    return `${count}`
  });

  updateTodo(todo: Todo) {
    this.todos.update((todoList) =>
      todoList.map((todoEntry) => {
        if (todo.id === todoEntry.id) todoEntry.completed = !todoEntry.completed;
      
        return todoEntry;
      })
    );
  }
}
