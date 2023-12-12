import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
      <div className=" w- ful h-screen flex ">
        <Sidebar />
        {/* <div className="flex-grow flex flex-col"> */}
        <HomePage />
        <Outlet />
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
