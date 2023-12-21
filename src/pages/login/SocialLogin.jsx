import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  // context
  const { googleLogin, githubLogin } = useAuth();

  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((res) => {
        console.log(res.user);
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      });
  };
  return (
    <div className="flex items-center justify-center  ">
      <button
        onClick={handleGoogleLogin}
        className="mx-auto btn btn-sm bg-white border border-gray-500  "
      >
        <FcGoogle className="text-2xl"></FcGoogle>
      </button>
      <button className="mx-auto btn btn-sm bg-white border border-gray-500 " onClick={handleGithubLogin}>
        <FaGithub className="text-2xl"/>
      </button>
    </div>
  );
};

export default SocialLogin;
