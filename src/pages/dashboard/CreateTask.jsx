import { useForm } from "react-hook-form";
 
 
import toast from "react-hot-toast";
 
import useAuth from "../../hooks/useAuth";
import axiosSecure from "../../api";

 

const CreateTask = () => {
  const { register, handleSubmit,reset } = useForm();
  const {user} = useAuth()
   
  

  const onSubmit = async (data) => {
   
      // send the menu item data to server with image
      const taskItem = {
        title: data.title,
        name: user?.displayName,
        email:user?.email,
        priority: data.priority,
        details: data.details,
        deadline: data.deadline,
       
      };

      
      const {data:datas=[]} = await axiosSecure.post("/create-task", taskItem);
      console.log(datas);
      if (datas.insertedId) {
        reset()
        toast.success('Task Added Successfully')
      }
    }
   

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
            ></textarea>
          </div>
          
             {/* Priority selection */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Priority</span>
            </label>
            <select {...register("priority", { required: true })} className="select select-bordered">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
                  </div>
                  {/* data */}
                  <div className="form-control w-full my-6 ">
            <label className="label">
              <span className="label-text">Deadline*</span>
            </label>
            <input
              {...register("deadline", { required: true })}
              type="date"
              placeholder="deadline"
              className="input input-bordered w-full"
            />
          </div>
                  
          <button type="submit" className="btn bg-first mt-3 text-white">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};
export default CreateTask;