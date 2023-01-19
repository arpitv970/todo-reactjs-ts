const InputBar = () => {
    return (
        <span className='flex items-center mx-auto p-auto justify-evenly w-[80vw]'>
            <input
                className='text-dimWhite bg-dimBlue hover:border-white transition-all duration-300 ease-in-out items-center mx-auto px-[1.5rem] py-1 w-[90%] h-max text-[2rem] rounded-3xl outline-none border-2 border-dimWhite'
                placeholder='Enter your Task'
            ></input>
            <button className='text-[1.2rem] border-2 border-dimWhite hover:bg-dimBlue hover:border-white transition-all duration-300 ease-in-out rounded-3xl flex items-center justify-center text-center w-[5rem] h-[3.5rem] my-auto mx-auto'>
                Add
            </button>
        </span>
    );
};

export default InputBar;
