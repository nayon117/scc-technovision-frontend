import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const Status = () => {
  const [myTask, setMyTask] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(
      `https://scc-technovision-backend.vercel.app/create-task?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyTask(data));
  }, [user?.email]);
  console.log(myTask);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center mt-12">
        <div className="">
          <h2 className="text-lg font-medium mb-3">TODO</h2>
          <div>
            {myTask?.map((task) => (
              <div
                key={task._id}
                className="card my-3 card-compact bg-third shadow-md cursor-pointer"
              >
                <div className="card-body">
                  <h2 className="card-title text-center mx-auto">
                    Title: {task.title}
                  </h2>
                  <p>Details: {task.details}</p>
                  <p>Deadline: {task.deadline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium">Ongoing</h2>
        </div>
        <div>
          <h2 className="text-lg font-medium">Completed</h2>
        </div>
      </div>
    </div>
  );
};
export default Status;
