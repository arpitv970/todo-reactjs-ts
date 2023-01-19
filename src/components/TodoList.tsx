import { Todo } from '../model';
import { FiEdit3 } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { BsCheckCircle } from 'react-icons/bs';
import { IoIosRefresh } from 'react-icons/io';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
    return (
        <section className='grid sm:grid-cols-1 grid-cols-2 gap-6 mx-auto sm:w-[100vw] w-[80vw]'>
            {todos.map((t) => (
                <div className='sm:text-[1.3rem] md:text-[1.5rem] text-[1.8rem] border-2 border-white rounded-xl text-white opacity-70 hover:opacity-100 transition-all duration-200 ease-in-out flex justify-around items-center mx-auto sm:w-[90vw] w-[30vw] h-max px-[2rem]'>
                    <span className='w-[50%] pr-0'>{t.todo}</span>
                    <span className='h-[100%] my-5 flex justify-between w-[10rem]'>
                        <FiEdit3 className='hover:cursor-pointer' />
                        <MdDelete className='hover:cursor-pointer' />
                        <BsCheckCircle className='hover:cursor-pointer' />
                        <IoIosRefresh className='hover:cursor-pointer' />
                    </span>
                </div>
            ))}
        </section>
    );
};

export default TodoList;
