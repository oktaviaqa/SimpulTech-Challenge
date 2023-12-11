import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { Button } from "flowbite-react";
import { BiSearchAlt2 } from "react-icons/bi";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" w- ful h-screen flex ">
        {/* sidebar */}
        <div className=" w-[285px] border-r-2 border-[#E0E0E0] "></div>
        {/* search */}
        <div className=" w-full h-full ">
          <div className=" bg-[#4F4F4F] p-4 text-[#F2F2F2] text-lg ">
            <BiSearchAlt2 />
          </div>
        </div>
      </div>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <Button>Click me</Button> */}
      {/* </div> */}
    </>
  );
}

export default App;
