import logo from "@assets/images/logo.svg";
import { useAppContext } from "../../contexts/app/app-context";
import { Link } from "react-router-dom";
import { Image } from "@nextui-org/react";
import coursesIcon from "../../assets/icons/theme/courses.svg";
import userIcon from "../../assets/icons/outlined/user.svg";
import newsIcon from "../../assets/icons/theme/phoneMode/news.svg";
import plusIcon from "../../assets/icons/outlined/folder-plus.svg";
import userplusIcon from "../../assets/icons/outlined/user-plus.svg";
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
            <Link
              className={"sidebar-link !flex gap-1 items-center mb-1"}
              to={"add-course-categories"}
            >
              <img alt="" src={plusIcon} className="w-[20px]" />
              <span className="!text-lightBody dark:!text-darkBody">
                افزودن دسته بندی
              </span>
            </Link>
          </li>
          <li className="sidebar-header !text-xl !text-lightTitle dark:!text-darkTitle mb-3">
            مدیریت اخبار
          </li>
          <li>
            <Link
              className={"sidebar-link !flex gap-1 items-center mb-1"}
              to={"news"}
            >
              <Image alt="" src={newsIcon} width={25} />
              <span className="!text-lightBody dark:!text-darkBody">
                همه اخبار
              </span>
            </Link>
            <Link
              className={"sidebar-link !flex gap-1 items-center mb-1"}
              to={"add-news-categories"}
            >
              <img alt="" src={plusIcon} className="w-[20px]" />
              <span className="!text-lightBody dark:!text-darkBody">
                افزودن دسته بندی
              </span>
            </Link>
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
          <li className="sidebar-header !text-xl !text-lightTitle dark:!text-darkTitle mb-3">
            مدیریت کاربران
          </li>

          <li>
            <Link
              className={"sidebar-link !flex gap-1 items-center mb-1"}
              to={"/users"}
            >
              <img alt="" src={userIcon} className="w-[25px]" />
              <span className="!text-lightBody dark:!text-darkBody">
                همه کاربران
              </span>
            </Link>
          </li>
          <li>
            <Link
              className={"sidebar-link !flex gap-1 items-center mb-1"}
              to={"/add-user"}
            >
              <img alt="" src={userplusIcon} className="w-[25px]" />
              <span className="!text-lightBody dark:!text-darkBody">
                افزودن کاربر
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
