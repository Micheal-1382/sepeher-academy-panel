import logo from "@assets/images/logo.svg";
import { useAppContext } from "../../contexts/app/app-context";
import { Link } from "react-router-dom";
import { Image } from "@nextui-org/react";
import coursesIcon from "../../assets/icons/theme/courses.svg";

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
          <li className="sidebar-header !text-xl !text-lightTitle dark:!text-darkTitle mb-3">
            مدیریت دوره ها
          </li>
          <li>
            <Link
              className={"sidebar-link !flex gap-1 items-center mb-1"}
              to={"/"}
            >
              <Image alt="" src={coursesIcon} />
              <span className="!text-lightBody dark:!text-darkBody">
                همه دوره ها
              </span>
            </Link>
            <Link
              className={"sidebar-link !flex gap-1 items-center mb-1"}
              to={"course-categories"}
            >
              <Image alt="" src={coursesIcon} />
              <span className="!text-lightBody dark:!text-darkBody">
                دسته بندی دوره ها
              </span>
            </Link>
          </li>
          <li className="sidebar-header !text-xl !text-lightTitle dark:!text-darkTitle mb-3">
            مدیریت اخبار
          </li>
          <li>
            <Link
              className={"sidebar-link !flex gap-1 items-center mb-1"}
              to={"comments"}
            >
              <Image alt="" src={coursesIcon} />
              <span className="!text-lightBody dark:!text-darkBody">
                همه کامنت ها
              </span>
            </Link>
          </li>

          <li>
            <Link
              className={"sidebar-link !flex gap-1 items-center mb-1"}
              to={"/"}
            >
              <Image alt="" src={coursesIcon} />
              <span className="!text-lightBody dark:!text-darkBody">
                همه نظرات
              </span>
            </Link>
          </li>

          <li className="sidebar-header !text-xl !text-lightTitle dark:!text-darkTitle mb-3">
            مدیریت اخبار
          </li>

          <li>
            <Link
              className={"sidebar-link !flex gap-1 items-center mb-1"}
              to={"/"}
            >
              <Image alt="" src={coursesIcon} />
              <span className="!text-lightBody dark:!text-darkBody">
                همه نظرات
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
