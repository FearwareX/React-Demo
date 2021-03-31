import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useReducer
} from 'react';
import MyHeader from '@/components/Header';
import TdList from '@/components/Todo/List';
import TdInput from '@/components/Todo/Input';
import { ITodo, Istate, ACTION_TYPE } from '@/components/Todo/typings';
import { todoReducer } from '@/components/Todo/reducer';

// 惰性初始化
const init = (initTodoList: ITodo[]): Istate => {
  return {
    todoList: initTodoList
  };
};

const Index: FC = (): ReactElement => {
  // const [todoList, setTodolist] = useState<ITodo[]>([]);

  const [state, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    console.log(state.todoList);
  }, [state.todoList]);

  const addTodo = useCallback((todo: ITodo) => {
    dispatch({
      type: ACTION_TYPE.ADD_TODO,
      payload: todo
    });
  }, []);

  const removeTodo = useCallback((id: number): void => {
    dispatch({
      type: ACTION_TYPE.REMOVE_TODO,
      payload: id
    });
  }, []);

  const toggleTodo = useCallback((id: number): void => {
    dispatch({
      type: ACTION_TYPE.TOGGLE_TODO,
      payload: id
    });
  }, []);

  return (
    <>
      <MyHeader />
      <div className='main'>
        <TdInput addTodo={addTodo} todoList={state.todoList} />
        <TdList
          todoList={state.todoList}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      </div>
    </>
  );
};

export default Index;
