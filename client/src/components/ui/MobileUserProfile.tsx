import { useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export const MobileUserProfile = () => {
  const modal = useRef<HTMLDivElement | null>(null);

  function handleToggle() {
    modal.current?.classList.toggle("hide");
  }

  return (
    <div className="fixed top-[20px] right-[20px] flex flex-col items-end gap-[5px] mobile:hidden z-[11]">
      {/* toggler */}
      <div
        className=""
        onClick={() => {
          handleToggle();
        }}
      >
        <FaUserCircle className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-[#585858] cursor-pointer" />
      </div>
      {/* modal */}
      <div
        ref={modal}
        className="hide w-[150px]  bg-[#585858] rounded-lg transition-all duration-300 overflow-hidden"
      >
        <ul className="w-[100%] h-[100%] flex flex-col p-[10px] gap-[20px]">
          <Link to={"/login"}>
            <li
              className="w-[100%] text-[#2F94C4] hover:text-[#60b8e0]"
              onClick={() => {
                handleToggle();
              }}
            >
              Log In
            </li>
          </Link>
          <Link to={"/signup"}>
            <li
              className="w-[100%] text-[#3dcf8dd7] hover:text-[#3dcf8db0]"
              onClick={() => {
                handleToggle();
              }}
            >
              Sign Up
            </li>
          </Link>
          {/* <li className="w-[100%] text-[#3dcf8dd7] hover:text-[#3dcf8db0]">
              Log Out
            </li> */}
        </ul>
      </div>
    </div>
  );
};
