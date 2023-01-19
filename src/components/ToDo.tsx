import { Todo } from '../model';
import { FiEdit3 } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { BsCheckCircle } from 'react-icons/bs';
import { IoIosRefresh } from 'react-icons/io';

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

    return (
        <form className='sm:text-[1.3rem] md:text-[1.5rem] text-[1.8rem] border-2 border-white rounded-xl text-white opacity-70 hover:opacity-100 transition-all duration-200 ease-in-out flex justify-around items-center mx-auto sm:w-[90vw] w-[100%] h-max px-[2rem]'>
            {todo.isDone === true ? (
                <s className='w-[50%] pr-0 italic'>{todo.todo}</s>
            ) : (
                <span className='w-[50%] pr-0'>{todo.todo}</span>
            )}
            <span className='h-[100%] my-5 flex justify-between w-[10rem]'>
                <FiEdit3 className='hover:cursor-pointer' />
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
            </span>
        </form>
    );
};

export default ToDo;
