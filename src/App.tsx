import InputBar from './components/InputBar';

const App: React.FC = () => {
    return (
        <div className='font-poppins bg-primary h-[100vh] w-full overflow-hidden text-white'>
            <h1 className='sm:text-3xl text-5xl font-bold text-center mx-auto my-[2%]'>
                TO-DO React App + TS
            </h1>
            <InputBar />
        </div>
    );
};

export default App;
