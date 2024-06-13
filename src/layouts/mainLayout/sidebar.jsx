import logo from "@assets/images/logo.svg";
import { useAppContext } from "../../contexts/app/app-context";
import { Link, NavLink } from "react-router-dom";
import { Image } from "@nextui-org/react";
import coursesIcon from "../../assets/icons/theme/courses.svg";

const Sidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <nav
      className={`sidebar ${
        !showSidebar ? "collapsed" : ""
      } bg-white dark:bg-dark border-l-1 border-[#bfbfbf] dark:border-[#848484]`}
    >
      <div>
        <div className="flex flex-col items-center gap-2 pt-4">
          <Image src={logo} alt="" width={80} />
          <p className="font-peyda text-xl">سپهر آکادمی</p>
        </div>
        <ul className="pe-0 font-peyda">
          <li className="sidebar-header !text-xl !text-lightTitle dark:!text-darkTitle mb-3">
            مدیریت دوره ها
          </li>
          <li>
            <NavLink
              className={
                "sidebar-link !flex gap-1 items-center !bg-[#ededed] dark:!bg-dark-lighter mb-1"
              }
              to={"/"}
            >
              <Image alt="" src={coursesIcon} />
              <span className="!text-lightBody dark:!text-darkBody">
                همه دوره ها
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                "sidebar-link !flex gap-1 items-center !bg-[#ededed] dark:!bg-dark-lighter mb-1"
              }
              to={"/"}
            >
              <Image alt="" src={coursesIcon} />
              <span className="!text-lightBody dark:!text-darkBody">
               همه اخبار
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              className={
                "sidebar-link !flex gap-1 items-center !bg-[#ededed] dark:!bg-dark-lighter mb-1"
              }
              to={"/"}
            >
              <Image alt="" src={coursesIcon} />
              <span className="!text-lightBody dark:!text-darkBody">
                همه نظرات
              </span>
            </NavLink>
          </li>
         

          
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
