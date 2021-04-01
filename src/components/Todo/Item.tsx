/* eslint-disable react/prop-types */
import React, { FC, ReactElement } from 'react';

interface IProps {
  todo: ITodo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TdItem: FC<IProps> = ({ todo, toggleTodo, removeTodo }): ReactElement => {
  const { id, content, completed } = todo;

  return (
    <div className='todo_item'>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        {content}
      </span>
      <button onClick={() => removeTodo(id)}>删除</button>
    </div>
  );
};

export default TdItem;