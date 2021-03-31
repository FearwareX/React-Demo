import React, { FC, ReactElement } from 'react';
import { ITodo } from './typings';
import Tditem from './Item';

interface IProps {
  todoList: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TdList: FC<IProps> = ({
  todoList,
  toggleTodo,
  removeTodo
}): ReactElement => {
  return (
    <div className='todo_list'>
      {todoList &&
        todoList!.map((todo: ITodo) => {
          return (
            <Tditem
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
            />
          );
        })}
    </div>
  );
};

export default TdList;
