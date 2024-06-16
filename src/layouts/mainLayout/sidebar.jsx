import logo from "@assets/images/logo.svg";
import { useAppContext } from "../../contexts/app/app-context";
import { Link } from "react-router-dom";
import { Image } from "@nextui-org/react";
import coursesIcon from "../../assets/icons/theme/courses.svg";
import userIcon from "../../assets/icons/outlined/user.svg";
import newsIcon from "../../assets/icons/theme/phoneMode/news.svg";
import plusIcon from "../../assets/icons/outlined/folder-plus.svg";
import userplusIcon from "../../assets/icons/outlined/user-plus.svg";
import { sidebarItems } from "../../constants/sidebarItems";

const Sidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <nav
      className={`sidebar ${
        !showSidebar ? "collapsed" : ""
      } bg-white dark:bg-dark`}
    >
      <div>
        <div className="flex flex-col items-center gap-2 pt-4">
          <Image src={logo} alt="" width={80} />
          <p className="font-peyda text-xl">سپهر آکادمی</p>
        </div>
        <ul className="pe-0 font-peyda">
          {sidebarItems()?.map((item, index) => (
            <div key={index}>
              <li className="sidebar-header !text-xl !text-lightTitle dark:!text-darkTitle mb-3">
                {item.name}
              </li>
              {item.children.map((childItem, index2) => (
                <Link
                  className={"sidebar-link !flex gap-1 items-center mb-1"}
                  to={childItem.href}
                  key={index2}
                >
                  <Image alt="" src={coursesIcon} />
                  <span className="!text-lightBody dark:!text-darkBody">
                    {childItem.name}
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
