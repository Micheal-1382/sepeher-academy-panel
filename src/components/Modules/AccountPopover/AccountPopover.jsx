import accountPopoverItems from "../../../constants/accountPopoverItems";
import {
  Divider,
  Image,
  Listbox,
  ListboxItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import React from "react";
import logout from "../../../assets/icons/theme/logout.svg";
import userIcon from "../../../assets/icons/theme/user.svg";
import UserCard from "../UserCard/UserCard";
import MainButton from "../Button/MainButton";
import { revokeTokenAndRoles } from "../../../utils/revokeToken";

export default function AccountPopover() {
  const logoutUserHandler = () => {
    revokeTokenAndRoles();
    window.location.replace("/login");
  };
  return (
    <Popover offset={15} placement="bottom-start" backdrop={"blur"}>
      <PopoverTrigger>
        <div className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 !bg-primary rounded-full">
          <Image
            className="scale-85"
            src={userIcon}
            alt=""
            style={{ width: "auto" }}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="!w-[250px] bg-white sm:!w-[340px] items-start rounded-tl-none py-4 px-4">
        <>
          <UserCard
            title="آرمان غنی زاده"
            description="موجودی: ۰تومان"
            image={""}
            size={50}
          />
          <Divider className="!my-3" />
          <div className="w-full flex flex-col">
            <Listbox onAction={(key) => router.push(`/${key}`)}>
              {accountPopoverItems.map((item) => (
                <ListboxItem key={item.route} className="!py-4">
                  <div className="flex !items-center gap-x-3">
                    <Image src={item.icon} alt="" />
                    <span className="!text-sm text-lightBody dark:text-darkBody font-peyda">
                      {item.label}
                    </span>
                  </div>
                </ListboxItem>
              ))}
            </Listbox>
            <Divider className="!my-4" />
            <MainButton
              content={
                <div className="flex items-center justify-center gap-x-1">
                  <Image src={logout} alt="" />
                  <span className="text-lightBody dark:text-darkBody font-peyda">
                    خروج از حساب
                  </span>
                </div>
              }
              onClick={logoutUserHandler}
              variant="light"
              color="danger"
            />
          </div>
        </>
      </PopoverContent>
    </Popover>
  );
}
