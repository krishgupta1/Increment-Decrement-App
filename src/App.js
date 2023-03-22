import logo from './logo.svg';
import './App.css';


function App() {
  return (
      /* <h1>jai Shree Shyam</h1> */
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-2xl">Increment && Decrement</div>
      <div>
        <button>
          -
        </button>
        <div></div>
        <button>
          +
        </button>
      </div>
      <button>Reset</button>
    </div>
  )};

export default App;
