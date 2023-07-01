import { Outlet } from "react-router-dom";
import ToggleLanguage from "../components/ToggleLanguage";

function AuthLayout() {
  return (
    <div className="min-h-screen  flex justify-center items-center bg-primary bg-opacity-10 py-4">
      <div className="absolute top-5 right-5">
        <ToggleLanguage />
      </div>
      <div className="flex flex-col bg-white border rounded-lg shadow px-4 py-6">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
