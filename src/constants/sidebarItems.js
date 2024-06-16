import Cookies from "js-cookie";

export const sidebarItems = () => {
  const roles = Cookies.get("roles").split(",");

  const isAdmin = roles.includes("Administrator");
  const isTeacher = roles.includes("Teacher");

  const items = [
    {
      name: "مدیریت دوره ها",
      children: [
        {
          name: "همه دوره ها",
          href: "courses",
          access: {
            ADMIN: true,
            TEACHER: false,
          },
        },
        {
          name: "دانشجویان رزرو شده",
          href: "course-reserves",
          access: {
            ADMIN: true,
            TEACHER: true,
          },
        },
        {
          name: "دسته بندی دوره ها",
          href: "course-categories",
          access: {
            ADMIN: true,
            TEACHER: true,
          },
        },
        {
          name: "افزودن دسته بندی",
          href: "add-course-categories",
          access: {
            ADMIN: true,
            TEACHER: true,
          },
        },
      ],
    },
    {
      name: "مدیریت اخبار",
      children: [
        {
          name: "همه اخبار",
          href: "news",
          access: {
            ADMIN: true,
            TEACHER: false,
          },
        },
        {
          name: "افزودن دسته بندی",
          href: "add-news-categories",
          access: {
            ADMIN: true,
            TEACHER: true,
          },
        },
      ],
    },
    {
      name: "مدیریت کامنت ها",
      children: [
        {
          name: "همه کامنت ها",
          href: "comments",
          access: {
            ADMIN: true,
            TEACHER: false,
          },
        },
      ],
    },
    {
      name: "مدیریت کاربران",
      children: [
        {
          name: "همه کاربران",
          href: "users",
          access: {
            ADMIN: true,
            TEACHER: true,
          },
        },
        {
          name: "افزودن کاربر",
          href: "add-user",
          access: {
            ADMIN: true,
            TEACHER: true,
          },
        },
      ],
    },
  ];

  return items
    .map((item) => {
      const filteredChildren = item.children.filter((child) => {
        if (isAdmin) {
          return true;
        } else if (isTeacher) {
          return child.access.TEACHER;
        }
        return false;
      });
      return {
        ...item,
        children: filteredChildren,
      };
    })
    .filter((item) => item.children.length > 0);
};
