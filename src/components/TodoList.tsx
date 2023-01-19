import { Todo } from '../model';
import ToDo from './ToDo';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
    return (
        <section className='grid sm:grid-cols-1 grid-cols-2 gap-6 mx-auto sm:w-[100vw] w-[80vw]'>
            {todos.map((t) => (
                <ToDo todo={t} key={t.todo} todos={todos} setTodos={setTodos} />
            ))}
        </section>
    );
};

export default TodoList;
