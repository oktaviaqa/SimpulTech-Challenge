import { BiSearchAlt2 } from "react-icons/bi";
import Button from "../components/button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="w-full h-full">
      <div className="bg-[#4F4F4F] p-4 text-[#F2F2F2] text-lg">
        <BiSearchAlt2 />
      </div>
      <Button
        menu1={menu1}
        menu2={menu2}
        menu3={menu3}
        setMenu1={setMenu1}
        setMenu2={setMenu2}
        setMenu3={setMenu3}
        navigate={navigate}
      />
    </div>
  );
}
