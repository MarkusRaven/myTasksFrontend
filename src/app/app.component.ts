import { AppService } from './app.service';
import { ICategory } from './interfaces';
import { FormComponent } from './form/form.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  categories$?: Observable<ICategory[]>;

  constructor(
    public dialog: MatDialog,
    private readonly appService: AppService
  ) {}

  ngOnInit() {
    this.categories$ = this.appService.categories();
  }

  openDialog() {
    this.dialog.open(FormComponent, {
      width: '368px',
    });
  }
}
