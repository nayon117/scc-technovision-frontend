import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import axiosSecure from "../../api";
import { useLoaderData } from "react-router";

const UpdateTask = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const { title, _id, deadline, priority, details } = useLoaderData();

  const onSubmit = async (data) => {
    // send the menu item data to server with image
    const taskItem = {
      title: data.title,
      name: user?.displayName,
      email: user?.email,
      priority: data.priority,
      details: data.details,
      deadline: data.deadline,
    };

    const { data: datas = [] } = await axiosSecure.patch(
      `/create-task/${_id}`,
      taskItem
    );
    console.log(datas);
    if (datas.modifiedCount > 0) {
      reset();
      toast.success("Task Updated Successfully");
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6 ">
            <label className="label">
              <span className="label-text">Title*</span>
            </label>
            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="title..."
              defaultValue={title}
              className="input input-bordered w-full"
            />
          </div>
          {/*  details  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details </span>
            </label>
            <textarea
              {...register("details", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Details"
              defaultValue={details}
            ></textarea>
          </div>

          {/* Priority selection */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Priority</span>
            </label>
            <select
              {...register("priority", { required: true })}
              className="select select-bordered"
              defaultValue={priority}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          {/* deadline */}
          <div className="form-control w-full my-6 ">
            <label className="label">
              <span className="label-text">Deadline*</span>
            </label>
            <input
              {...register("deadline", { required: true })}
              type="date"
              placeholder="deadline"
              className="input input-bordered w-full"
              defaultValue={deadline}
            />
          </div>

          <button type="submit" className="btn bg-first mt-3 text-white">
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
};
export default UpdateTask;
