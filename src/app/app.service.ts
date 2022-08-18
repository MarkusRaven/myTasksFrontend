import { ADD_TODO, IADD_TODO } from './gql/addTodo';
import { IUPDATE_TODO, UPDATE_TODO } from './gql/updateTodo';
import { CREATE_TODO, ICREATE_TODO } from './gql/createTodo';
import { CATEGORIES, ICATEGORIES } from './gql/categories';
import { ICategory, ITodo } from './interfaces';
import { Observable, map, of } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private readonly apollo: Apollo) {}

  categories(): Observable<ICategory[]> {
    return this.apollo
      .watchQuery<ICATEGORIES>({
        query: CATEGORIES,
      })
      .valueChanges.pipe(
        map(({ data }) => {
          return data.categories;
        })
      );
  }

  createTodo(text: string, categoryName: string): Observable<ITodo | any> {
    return of(
      this.apollo
        .mutate<ICREATE_TODO>({
          mutation: CREATE_TODO,
          variables: {
            createTodo: {
              categoryName,
              text,
            },
          },
          refetchQueries: [CATEGORIES],
        })
        .subscribe(({ data }) => {
          return data?.createTodo;
        })
    );
  }

  updateTodo(todoId: number): Observable<ITodo | any> {
    return of(
      this.apollo
        .mutate<IUPDATE_TODO>({
          mutation: UPDATE_TODO,
          variables: {
            updateTodo: +todoId,
          },
          refetchQueries: [CATEGORIES],
        })
        .subscribe(({ data }) => {
          return data?.updatedTodo;
        })
    );
  }

  addTodo(text: string, categoryId: number): Observable<ITodo | any> {
    return of(
      this.apollo
        .mutate<IADD_TODO>({
          mutation: ADD_TODO,
          variables: {
            addTodo: {
              categoryId: +categoryId,
              text,
            },
          },
          refetchQueries: [CATEGORIES],
        })
        .subscribe(({ data }) => {
          return data?.addedTodo;
        })
    );
  }
}
