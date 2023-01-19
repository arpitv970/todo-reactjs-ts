import { Todo } from '../model';
import { FiEdit3 } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { BsCheckCircle } from 'react-icons/bs';
import { IoIosRefresh } from 'react-icons/io';

import React, { useState, useRef, useEffect } from 'react';
import { IconContext } from 'react-icons';

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
    const doneTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: true } : todo
            )
        );
    };

    const undoDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: false } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const editTask = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, todo: editTodo } : todo
            )
        );
        setEdit(false);
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
            onSubmit={(e) => editTask(e, todo.id)}
            className='sm:text-[1.3rem] md:text-[1.5rem] text-[1.8rem] border-2 border-white rounded-xl text-white opacity-70 hover:opacity-100 transition-all duration-200 ease-in-out flex justify-around items-center mx-auto sm:w-[90vw] w-[100%] h-max px-[2rem]'
        >
            {edit ? (
                <input
                    ref={inputRef}
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                    className='text-dimWhite placeholder-dimWhite placeholder:opacity-25 bg-dimBlue hover:border-white opacity-90 transition-all duration-300 ease-in-out items-center sm:my-5 mx-auto px-[1.5rem] py-1 w-[50%] h-[90%] sm:text-[1.8rem] text-[2rem] rounded-xl outline-none border-2 border-dimWhite'
                />
            ) : todo.isDone === true ? (
                <s className='w-[50%] pr-0 italic'>{todo.todo}</s>
            ) : (
                <span className='w-[50%] pr-0'>{todo.todo}</span>
            )}
            <span className='h-[100%] m-5 flex justify-between w-[10rem]'>
                <IconContext.Provider
                    value={{ color: 'dimWhite', size: '2rem' }}
                >
                    <FiEdit3
                        onClick={() => {
                            if (!edit && !todo.isDone) {
                                setEdit(!edit);
                            } else {
                                setEdit(edit);
                            }
                        }}
                        className='hover:cursor-pointer'
                    />
                    <MdDelete
                        onClick={() => deleteTodo(todo.id)}
                        className='hover:cursor-pointer'
                    />
                    <BsCheckCircle
                        onClick={() => doneTodo(todo.id)}
                        className='hover:cursor-pointer'
                    />
                    <IoIosRefresh
                        onClick={() => undoDone(todo.id)}
                        className='hover:cursor-pointer'
                    />
                </IconContext.Provider>
            </span>
        </form>
    );
};

export default ToDo;
