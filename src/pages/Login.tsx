import { useNavigate } from "react-router-dom";
import { authActions } from "@/redux/authSlice";
import { useQuery } from "@tanstack/react-query";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useAppDispatch, userType } from "@/types";
import { loginUser } from "@/services/apiCalls";
import LoadingSipnner from "@/components/LoadingSipnner";
import ErrorMessage from "@/components/ErrorMessage";
import { useState } from "react";

const Login = () => {
  const [authenticateUser, setAuthenticateUser] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["login"],
    queryFn: loginUser,
    enabled: authenticateUser,
  });

  // const user = data as userType;

  const googleLogin = async () => {
    // setAuthenticateUser(true);
    const res = await fetch("http//:localhost:8000/api/v1/auth/google");
    const user = await res.json();
    
    if (user) {
      // setAuthenticateUser(false);
      dispatch(authActions.login(user));
      navigate("/");
    }
  };

  let content;
  
  if (isError) {
    content = <ErrorMessage message={error.message} />;
  }

  return (
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
          {content}
          <div className="flex justify-center items-center">
            <Button onClick={googleLogin} disabled={isLoading}>
              {isLoading ? <LoadingSipnner /> :"Login With Google"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
