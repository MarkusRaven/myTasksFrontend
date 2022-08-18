import { ICategory } from './../interfaces';
import { gql } from 'apollo-angular';

export interface ICATEGORIES {
  categories: ICategory[];
}

export const CATEGORIES = gql`
  query {
    categories {
      id
      title
      todos {
        id
        text
        isCompleted
      }
    }
  }
`;
