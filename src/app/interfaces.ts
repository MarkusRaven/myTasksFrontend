export interface ITodo {
  id: number;
  text: string;
  isCompleted: boolean;
  category: ICategory;
}
export interface ICategory {
  id: number;
  title: string;
  todos: ITodo[];
}
