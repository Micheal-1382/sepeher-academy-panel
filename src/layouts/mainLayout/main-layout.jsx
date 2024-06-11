import { Outlet, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Sidebar from "./sidebar";
import TopNav from "./top-nav";
import Footer from "../../components/Modules/Footer/Footer";

const MainLayout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    return navigate("/login", { replace: true });
  }

  const { t } = useTranslation();
  return (
    <div className="wrapper" style={{ minHeight: "100vh" }}>
      <Sidebar />
      <div className="main">
        <TopNav />
        <main className="content">
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
