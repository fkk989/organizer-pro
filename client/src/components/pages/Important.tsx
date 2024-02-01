import { useContext } from "react";
import { TaskCard, TaskAdder } from "../ui";
import { IoMdAdd } from "react-icons/io";
import { TaskFromContext } from "../../context";

export const Important = () => {
  const { taskForm, taskCard } = useContext(TaskFromContext)!;
  return (
    <div className="flex flex-col p-[20px] gap-[20px]">
      <div className="flex justify-between items-center ">
        <div className="flex flex-col gap-[10px]">
          <h1 className="font-[monospace] text-white text-[28px] mobile:text-[35px]">
            Important Task
          </h1>
          <div className="w-[50%] h-[5px] bg-[#3dcf8dd7] rounded-full"></div>
          <button
            onClick={() => {
              taskForm?.classList.toggle("hide");
              taskForm?.classList.toggle("show");
              taskCard?.classList.toggle("hide");
            }}
            className="max-mobile:hidden absolute right-[20px] mobile:right-[50px] flex justify-center items-center w-[40px] h-[40px] bg-transparent hover:bg-[#555454] rounded-full border border-[#ffffff96]"
          >
            <IoMdAdd className="text-[20px]  text-white" />
          </button>
        </div>
      </div>
      <div className="w-[100%]  task-container  overflow-scroll">
        <TaskCard
          status="pending"
          id=""
          title="Gym"
          description="Go to gym at 9 pm"
          date="30/1/2024"
        />
        <TaskCard
          status="processing"
          id=""
          title="Gym"
          description="Go to gym at 9 pm"
          date="30/1/2024"
        />
        <TaskCard
          status={"completed"}
          id=""
          title="Gym"
          description="Go to gym at 9 pm"
          date="30/1/2024"
        />
        <TaskCard
          status={"completed"}
          id=""
          title="Gym"
          description="Go to gym at 9 pm"
          date="30/1/2024"
        />
        <TaskCard
          status="pending"
          id=""
          title="Gym"
          description="Go to gym at 9 pm"
          date="30/1/2024"
        />
        <TaskCard
          status="processing"
          id=""
          title="Gym"
          description="Go to gym at 9 pm"
          date="30/1/2024"
        />
        <TaskCard
          status="processing"
          id=""
          title="Gym"
          description="Go to gym at 9 pm"
          date="30/1/2024"
        />
        <TaskCard
          status="processing"
          id=""
          title="Gym"
          description="Go to gym at 9 pm"
          date="30/1/2024"
        />
        <TaskCard
          status="processing"
          id=""
          title="Gym"
          description="Go to gym at 9 pm"
          date="30/1/2024"
        />
        <TaskCard
          status="processing"
          id=""
          title="Gym"
          description="Go to gym at 9 pm"
          date="30/1/2024"
        />
        <TaskAdder />
      </div>
    </div>
  );
};
