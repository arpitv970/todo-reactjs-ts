interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    addTodo: (e: React.FormEvent) => void;
}

const InputBar = ({ todo, setTodo, addTodo }: Props) => {
    return (
        <form
            className='flex sm:flex-col sm:h-[max] items-center mx-auto p-auto justify-evenly sm:w-[70vw] w-[80vw]'
            onSubmit={addTodo}
        >
            <input
                type='text'
                value={todo}
                onChange={(e) => {
                    setTodo(e.target.value);
                }}
                className='text-dimWhite placeholder-dimWhite placeholder:opacity-25 bg-dimBlue hover:border-white opacity-90 transition-all duration-300 ease-in-out items-center sm:my-5 mx-auto px-[1.5rem] py-1 w-[90%] h-max sm:text-[1.8rem] text-[2rem] rounded-3xl outline-none border-2 border-dimWhite'
                placeholder='Enter your Task'
            ></input>
            <button
                type='submit'
                className='text-[1.3rem] font-semibold border-2 border-dimWhite hover:bg-dimBlue opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out rounded-3xl flex items-center justify-center text-center w-[5rem] h-[3.5rem] sm:mt-2 my-auto mx-auto mb-0'
            >
                Add
            </button>
        </form>
    );
};

export default InputBar;
