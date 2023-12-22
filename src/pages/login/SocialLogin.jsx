import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { saveUser } from "../../api/auth";

const SocialLogin = () => {
  // context
  const { googleLogin, githubLogin } = useAuth();

  const navigate = useNavigate();

   //  google sign in
   const handleGoogleLogin = async () => {
    try {
      // create user
      const result = await googleLogin();

      // save user in database
      const dbResponse = await saveUser(result?.user);
      console.log(dbResponse);

      navigate("/");
      toast.success("sign In successful");
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };
   //  google sign in
   const handleGithubLogin = async () => {
    try {
      // create user
      const result = await githubLogin();

      // save user in database
      const dbResponse = await saveUser(result?.user);
      console.log(dbResponse);

      navigate("/");
      toast.success("sign In successful");
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
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
