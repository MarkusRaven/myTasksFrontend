import { ITodo } from './../interfaces';
import { gql } from 'apollo-angular';

export interface ICREATE_TODO {
  createTodo: ITodo;
}

export const CREATE_TODO = gql`
  mutation createTodo($createTodo: CreateTodosInput!) {
    createTodo(input: $createTodo) {
      category {
        id
        title
      }
      id
      text
    }
  }
`;
