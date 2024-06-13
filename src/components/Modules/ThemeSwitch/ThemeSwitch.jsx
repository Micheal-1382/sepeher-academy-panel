import React, { useEffect, useState } from "react";
import { Image, useSwitch, VisuallyHidden } from "@nextui-org/react";
import { useTheme } from "next-themes";
import moonIcon from "../../../assets/icons/theme/moon.svg";
import sunIcon from "../../../assets/icons/theme/sun.svg";
import Cookies from "js-cookie";

const ThemeSwitch = (props) => {
  const { Component, getBaseProps, getInputProps } = useSwitch(props);

  const { theme, setTheme } = useTheme();

  const [isLightMode, setIsLightMode] = useState(false);

  const changeThemeHandler = () => {
    if (Object.is(theme, "light")) {
      setTheme("dark");
      Cookies.set("theme", "dark");
    } else {
      setTheme("light");
      Cookies.set("theme", "light");
    }
  };

  useEffect(() => {
    switch (theme) {
      case "light": {
        setIsLightMode(true);
        break;
      }
      case "dark": {
        setIsLightMode(false);
        break;
      }
      default: {
        break;
      }
    }
  }, [theme]);

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          onClick={changeThemeHandler}
          className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full !bg-primary dark:bg-primary-darker"
        >
          {!isLightMode ? (
            <Image
              className="scale-110 mt-[3px] ml-[1px] "
              src={sunIcon}
              alt=""
              width={45}
              height={22}
            />
          ) : (
            <Image
              className="scale-[55%]"
              src={moonIcon}
              alt=""
              width={45}
              height={22}
            />
          )}
        </div>
      </Component>
    </div>
  );
};

export default ThemeSwitch;
