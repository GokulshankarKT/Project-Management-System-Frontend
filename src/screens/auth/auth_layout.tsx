import { Outlet } from "react-router-dom";

const auth_layout = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <Outlet />
    </div>
  );
};

export default auth_layout;
