/* eslint-disable react/prop-types */
import React, { FC, ReactElement } from 'react';
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
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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
