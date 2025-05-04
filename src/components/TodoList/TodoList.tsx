import { TodoInfo } from '../TodoInfo';
import usersFromServer from '../../api/users';
export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export type Props = {
  todos: Todo[];
};

const users = usersFromServer;

export const TodoList = ({ todos }: Props) => {
  return (
    <section className="TodoList">
      {todos.map(todo => {

        return <TodoInfo todo={todo} key={todo.id}></TodoInfo>;
      })}
    </section>
  );
};
