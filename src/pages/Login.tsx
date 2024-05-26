import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authActions } from "@/redux/authSlice";
// import { useQuery } from "@tanstack/react-query";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/types";
// import LoadingSipnner from "@/components/LoadingSipnner";
import { loginUser } from "@/services/apiCalls";

const Login = () => {
  const [error, setError] = useState<string | undefined>();
  // const [authenticateUser, setAuthenticateUser] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // const user  = {
  //   id: "664fbf965ba5688f26564fc6",
  //   userName: "xnaire godking",
  //   email: "dk80432@gmail.com",
  //   userImg:
  //     "https://lh3.googleusercontent.com/a/ACg8ocLfoZZfMLHxAMiTwmibJfgKRJBu1u2PVAUR0hGBrfF04N4g0ro=s96-c",
  //   totalPosts: 0,
  //   rank: 0,
  //   bio: "",
  //   followers: 0,
  //   correctGuesses: 0,
  //   credits: 10,
  //   places: [],
  // };

  // const {
  //   data,
  //   isLoading,
  //   error: queryError,
  // } = useQuery({
  //   queryKey: ["login"],
  //   queryFn: loginUser,
  //   enabled: !!authenticateUser,
  // });

  const showError = () => {
    toast.error(error, {
      position: "top-right",
    });
    const errorTime = setTimeout(() => {
      setError(undefined);
      clearTimeout(errorTime);
    }, 4000);
  };

  const googleLogin = async () => {
    // setAuthenticateUser(true);

    const data = await loginUser();
    
    if (data?.user) {
      // setAuthenticateUser(false);
      dispatch(authActions.login(data.user));
      navigate("/");
    }
    // setAuthenticateUser(false);
    setError(data?.message);
    showError();
  };

  return (
    <>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="flex flex-col h-screen overscroll-none">
        <div className="flex justify-between py-4 items-center bg-slate-500">
          <Logo />
          {/* <div className="flex items-center justify-between gap-4 px-4">
          <Button disabled={isLoading} onClick={googleLogin}>
            Login
          </Button>
          <Button
            disabled={isLoading}
            variant="secondary"
            onClick={googleLogin}
          >
            Register
          </Button>
        </div> */}
        </div>
        <div className="flex gap-4 px-6 w-full justify-between items-center h-full bg-slate-400">
          <div className="hidden md:flex object-contain shadow-xl">
            <img
              src="/images/loner.jpg"
              alt="Beautiful People Staring at an art gallery"
              className="w-[530px] h-[530px] overflow-auto rounded-xl shadow-lg"
            />
          </div>
          <div className="flex md:w-[400px] lg:w-full h-[530px] border flex-col text-center justify-center space-y-4 capitalize rounded-xl py-6">
            <h1 className="font-bold text-4xl">
              {" "}
              Discover, explore and share exciting places around you.
            </h1>
            <p className="text-xl">
              Let other travel enthusiasts guess the location and earn rewards!
              May the best travelers win.
            </p>
            <div className="flex justify-center items-center">
              <Button  onClick={googleLogin}>
                {/* {isLoading ? <LoadingSipnner /> : "Login With Google"} */}
                Login With Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
