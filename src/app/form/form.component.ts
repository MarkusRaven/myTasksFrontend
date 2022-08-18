import { MatDialog } from '@angular/material/dialog';
import { AppService } from './../app.service';
import { Observable } from 'rxjs';
import { ICategory } from './../interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent implements OnInit {
  categories$?: Observable<ICategory[]>;
  show?: boolean = false;
  createTodoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.categories$ = this.appService.categories();
    this.createTodoForm = this.formBuilder.group({
      todoText: [''],
      todoCategory: [''],
      todoNewCategory: [''],
    });
  }
  createTodo() {
    const todoText = this.createTodoForm.value.todoText;
    const todoCategory = this.createTodoForm.value.todoNewCategory;
    this.appService.createTodo(todoText, todoCategory);
    this.dialog.closeAll();
  }
  todoHandler() {
    this.createTodoForm.value.todoNewCategory
      ? this.createTodo()
      : this.addTodo();
  }

  addTodo() {
    const todoText = this.createTodoForm.value.todoText;
    const todoCategory = this.createTodoForm.value.todoCategory;
    this.appService.addTodo(todoText, todoCategory);
    this.dialog.closeAll();
  }

  isShown(visibility: boolean) {
    this.show = visibility;
  }

  clearHandler() {
    this.createTodoForm.get('todoNewCategory')?.setValue('');
  }
}
