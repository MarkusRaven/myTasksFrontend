import { ITodo } from './../interfaces';
import { gql } from 'apollo-angular';

export interface IUPDATE_TODO {
  updatedTodo: ITodo;
}

export const UPDATE_TODO = gql`
  mutation updateTodo($updateTodo: Float!) {
    updateTodo(input: { todoId: $updateTodo }) {
      isCompleted
    }
  }
`;
