import React, { useRef, FC, ReactElement } from 'react';
import { ITodo } from './typings';

interface TodoProps {
  addTodo: (todo: ITodo) => void;
  todoList: ITodo[];
}

// eslint-disable-next-line react/prop-types
const TdInput: FC<TodoProps> = ({ addTodo, todoList }): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);

  const addItem = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const val: string = inputRef.current!.value.trim();

    console.log(todoList);

    if (val.length) {
      // eslint-disable-next-line react/prop-types
      const isExist = todoList.find((todo) => todo.content === val);
      if (isExist) {
        alert('已存在该项！');
        return;
      }
      addTodo({
        id: new Date().getTime(),
        content: val,
        completed: false
      });

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      inputRef.current!.value = '';
    }
  };

  return (
    <div className='todo_input'>
      <input type='text' placeholder='请输入待办事件' ref={inputRef} />
      <input type='button' value='增加' onClick={addItem} />
    </div>
  );
};

export default TdInput;
