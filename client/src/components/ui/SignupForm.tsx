import React, { useState } from "react";
import { Link } from "react-router-dom";
interface TaskFormProp {}

export const SignupForm: React.FC<TaskFormProp> = ({}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="  w-[350px] h-[450px] mobile:w-[500px] mobile:h-[450px] bg-[#3f3f3f] rounded-lg overflow-scroll z-[6]">
      <div className="w-[100%] h-[100%] flex flex-col items-center">
        <h1 className="text-white text-[25px] font-[500] mt-[20px]">Sign Up</h1>
        <div className="w-[100%]  flex flex-col items-center mt-[50px] gap-[30px]">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="w-[90%] h-[55px] bg-transparent outline-none text-white text-[20px] border border-[#ffffff88] rounded-lg placeholder:text-[20px] p-[10px] "
          />
          <input
            type="text"
            placeholder="Name"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-[90%] h-[55px] bg-transparent outline-none text-white text-[20px] border border-[#ffffff88] rounded-lg placeholder:text-[20px] p-[10px] "
          />
          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-[90%] h-[55px] bg-transparent outline-none text-white text-[20px] border border-[#ffffff88] rounded-lg placeholder:text-[20px] p-[10px] "
          />
        </div>
        <div className="w-[100%] flex flex-col justify-center items-center mt-[20px] gap-[10px]">
          <button className="w-[90%] flex justify-center items-center text-white font-[500] bg-[#2F94C4] hover:bg-[#60b8e0] p-[10px] pl-[15px] pr-[15px] rounded-lg">
            Submit
          </button>
          <div className="w-[90%] flex justify-end items-center cursor-pointer text-end">
            <Link to={"/login"}>
              <div className="flex items-center gap-[5px]">
                <button className=" text-white">Already a user?</button>
                <div className="text-[#2F94C4] hover:text-[#60b8e0] ">
                  Log In
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
