import { gql } from 'apollo-angular';
import { ITodo } from '../interfaces';

export interface IADD_TODO {
  addedTodo: ITodo;
}

export const ADD_TODO = gql`
  mutation addTodo($addTodo: AddTodosInput!) {
    addTodo(input: $addTodo) {
      category {
        id
        title
      }
      id
      text
      isCompleted
    }
  }
`;
