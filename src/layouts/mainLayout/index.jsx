import { Outlet } from "react-router-dom";
import Footer from "../../components/Modules/Footer/Footer";
import TopNav from "./TopNav";
import Sidebar from "./sidebar";

const MainLayout = () => {
  return (
    <div className="wrapper" style={{ minHeight: "100vh" }}>
      <Sidebar />
      <div className="main">
        <TopNav />
        <main className="content bg-mainBodyBg dark:!bg-dark-lighter">
          <div className="container-fluid p-0">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
