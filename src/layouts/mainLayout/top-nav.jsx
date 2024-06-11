import ChangeLanguage from "../../components/Modules/change-language";
import ChangeTheme from "../../components/Modules/change-theme";
import ThemeSwitch from "../../components/Modules/theme-switch";
import { useAppContext } from "../../contexts/app/app-context";
import { useNavigate } from "react-router";
import menubarIcon from "../../assets/icons/outlined/menu-bar.svg";
import { Button, Image } from "@nextui-org/react";
import MainButton from "../../components/Modules/Button/MainButton";
import AccountPopover from "../../components/Modules/AccountPopover/AccountPopover";

const TopNav = () => {
  const { language, toggleSidebar } = useAppContext();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar  w-full">
      <Image
        src={menubarIcon}
        alt=""
        className="sidebar-toggle"
        onClick={toggleSidebar}
      />
      <div className="flex items-center gap-2">
        <ChangeLanguage />
        <ChangeTheme />
        <AccountPopover />
      </div>
    </nav>
  );
};

export default TopNav;
