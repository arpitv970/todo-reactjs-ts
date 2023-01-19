import InputBar from './components/InputBar';

const App: React.FC = () => {
    return (
        <div className='font-poppins bg-primary h-[100vh] w-full overflow-hidden text-white selection:bg-violet-800 leading-relaxed'>
            <h1 className='sm:leading-[3rem] sm:text-[2rem] md:text-[3rem] text-[5rem] font-bold text-center sm:mx-2 md:mx-5 mx-auto sm:mt-[8%]  my-[2%]'>
                TO-DO <br className='sm:block md:hidden hidden' /> React App + TS
            </h1>
            <InputBar />
            <div className='w-[75vw] h-0 items-center justify-center mx-auto sm:mt-[2rem] mt-[3rem] border border-dimWhite opacity-25 rounded-full' />
        </div>
    );
};

export default App;
