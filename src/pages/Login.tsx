import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { authActions } from "@/redux/authSlice";
import { useAppDispatch } from "@/types";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Login");
    dispatch(authActions.login());
    navigate("/");
  };

  const handleRegister = () => {
    console.log("Register");
  };

  return (
    <div className="flex flex-col h-screen overscroll-none">
      <div className="flex justify-between py-4 items-center bg-slate-500">
        <Logo />
        <div className="flex items-center justify-between gap-4 px-4">
          <Button onClick={handleLogin}>Login</Button>
          <Button variant="secondary" onClick={handleRegister}>
            Register
          </Button>
        </div>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
