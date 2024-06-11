import ChangeLanguage from "../../components/Modules/change-language";
import ChangeTheme from "../../components/Modules/change-theme";
import ThemeSwitch from "../../components/Modules/theme-switch";
import { useAppContext } from "../../contexts/app/app-context";
import { useNavigate } from "react-router";

const TopNav = () => {
  const { language, toggleSidebar } = useAppContext();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand dark:bg-dark">
      <a className="sidebar-toggle" onClick={toggleSidebar}>
        <i className="hamburger align-self-center"></i>
      </a>
      <div className="d-flex align-items-center gap-3">
        <ChangeLanguage />
        <ThemeSwitch />
      </div>
      <div className={`${language === "fa" ? "me-auto" : "ms-auto"}`}>
        <button
          className="btn ms-2 btn-outline-danger fw-bolder"
          onClick={logout}
        >
          خارج شوید
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
