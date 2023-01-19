import InputBar from './components/InputBar';
import React, { useState } from 'react';
import { Todo } from './model';
import TodoList from './components/TodoList';
import Divider from './components/Divider';

const App: React.FC = () => {
    // State for a single TODO
    const [todo, setTodo] = useState<string>('');

    // State for set of all TODOs
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (todos) {
            setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
            setTodo('');
        }
    };

    console.log(todos);

    return (
        <div className='font-poppins bg-primary h-[100vh] w-full overflow-y-scroll no-scrollbar text-white selection:bg-violet-800 leading-relaxed'>
            <h1 className='sm:leading-[3rem] sm:text-[2rem] md:text-[3rem] text-[5rem] font-bold text-center sm:mx-2 md:mx-5 mx-auto sm:mt-[8%]  my-[2%]'>
                TO-DO <br className='sm:block md:hidden hidden' /> React App +
                TS
            </h1>
            <InputBar todo={todo} setTodo={setTodo} addTodo={addTodo} />

            <Divider />

            <TodoList todos={todos} setTodos={setTodos} />

            <Divider />
        </div>
    );
};

export default App;
