import { AppService } from './../app.service';
import { ICategory } from './../interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() category?: ICategory;

  todos?: any;
  constructor(private readonly appService: AppService) {}

  ngOnInit() {
    this.todos = this.category?.todos;
    this.todos = [...this.todos].sort((x, y) => (x.text > y.text ? 1 : -1));
  }

  updateTodo(todoId: number) {
    this.appService.updateTodo(todoId);
  }
}
