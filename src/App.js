import React, { useState } from "react";

const App = () => {
  // let count = 0;
  const[count, setCount] = useState(0);

  function decreaseHandler(){
    // count = count-1;
    setCount(count-1);
  }

  function increaseHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }
  return (
  <div className="w-[100vw]- h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
    <div className="text-[#0398d4] font-medium text-2xl">
      Increment & Decrement
    </div>
    <div className="bg-white gap-12 py-3 flex justify-center rounded-sm text-[25px] text-[#344151]">
      <button onClick={decreaseHandler} className = "border-r-2 text-center text-5xl w-20 border-[#bfbfbf]">
        -
      </button>

      <h2 className="text-5xl gap-12 font-bold">
        {count}
      </h2>

      <button onClick={increaseHandler} className = "border-l-2 text-center text-5xl w-20 border-[#bfbfbf]">
        +
      </button>
    </div>
    <button onClick={resetHandler} className = "bg-[#0398d4] text-white text-lg py-2 px-7 rounded-md">
      Reset
    </button>
  </div>);
};

export default App;
