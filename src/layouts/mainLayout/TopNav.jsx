import { useAppContext } from "../../contexts/app/app-context";
import menubarIcon from "../../assets/icons/outlined/menu-bar.svg";
import { Image } from "@nextui-org/react";
import AccountPopover from "../../components/Modules/AccountPopover/AccountPopover";

const TopNav = () => {
  const { toggleSidebar } = useAppContext();
  return (
    <nav className="navbar  w-full">
      <Image
        src={menubarIcon}
        alt=""
        className="sidebar-toggle"
        onClick={toggleSidebar}
      />
      <div className="flex items-center gap-2">
        <AccountPopover />
      </div>
    </nav>
  );
};

export default TopNav;
