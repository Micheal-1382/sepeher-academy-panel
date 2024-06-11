import logo from "@assets/images/logo.svg";
import { useAppContext } from "../../contexts/app/app-context";
import { Link, NavLink } from "react-router-dom";
import { Image } from "@nextui-org/react";
import coursesIcon from "../../assets/icons/theme/courses.svg";

const Sidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <nav className={`sidebar ${!showSidebar ? "collapsed" : ""}`}>
      <div>
        <Link className="justify-center items-center w-full flex flex-col pt-2">
          <Image src={logo} alt="" width={80} />
          <p className="text-white font-peyda">سپهر آکادمی</p>
        </Link>

        <ul className="pe-0 font-peyda">
          <li className="sidebar-header !text-xl">مدیریت دوره ها</li>
          <li>
            <NavLink
              className={"sidebar-link !flex gap-1 items-center"}
              to={"/"}
            >
              <Image alt="" src={coursesIcon} />
              <span>همه دوره ها</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"sidebar-link !flex gap-1 items-center"}
              to={"/"}
            >
              <Image alt="" src={coursesIcon} />
              <span>همه دوره ها</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"sidebar-link !flex gap-1 items-center"}
              to={"/"}
            >
              <Image alt="" src={coursesIcon} />
              <span>همه دوره ها</span>
            </NavLink>
          </li>
          <li className="sidebar-header !text-xl">مدیریت کاربران</li>
          <li>
            <NavLink
              className={"sidebar-link !flex gap-1 items-center"}
              to={"/"}
            >
              <Image alt="" src={coursesIcon} />
              <span>همه دوره ها</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"sidebar-link !flex gap-1 items-center"}
              to={"/"}
            >
              <Image alt="" src={coursesIcon} />
              <span>همه دوره ها</span>
            </NavLink>
          </li>
          <li className="sidebar-header !text-xl">مدیریت اخبار</li>
          <li>
            <NavLink
              className={"sidebar-link !flex gap-1 items-center"}
              to={"/"}
            >
              <Image alt="" src={coursesIcon} />
              <span>همه دوره ها</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"sidebar-link !flex gap-1 items-center"}
              to={"/"}
            >
              <Image alt="" src={coursesIcon} />
              <span>همه دوره ها</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
