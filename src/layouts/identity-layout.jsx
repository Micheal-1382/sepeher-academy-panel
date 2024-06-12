import { Outlet } from "react-router-dom";

const IdentityLayout = () => {
  return (
    <>
      <div className="main flex justify-center w-full !container">
        <div className="w-[100%] md:w-[60%] lg:w-[50%] mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default IdentityLayout;
