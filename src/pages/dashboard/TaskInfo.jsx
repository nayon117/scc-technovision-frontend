import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import useAuth from "../../hooks/useAuth";
import axiosSecure from "../../api";

const TaskInfo = () => {
  const [myTask, setMyTask] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/create-task?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyTask(data));
  }, [user?.email]);

  const handleDeleteClass = (taskItem) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/create-task/${taskItem._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          setMyTask((prevClasses) =>
            prevClasses.filter((item) => item._id !== taskItem._id)
          );
          Swal.fire({
            title: "Deleted!",
            text: `${taskItem.name}file has been deleted`,
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead className="text-base">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {myTask.map((taskItem, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{taskItem.title}</td>
              <td>{taskItem.details}</td>

              <td>
                <Link to={`/dashboard/UpdateTask/${taskItem._id}`}>
                  <button className="text-xl">
                    <FaEdit />
                  </button>
                </Link>
              </td>
              <td>
                <button
                  className="text-xl"
                  onClick={() => handleDeleteClass(taskItem)}
                >
                  <MdDeleteForever />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TaskInfo;
