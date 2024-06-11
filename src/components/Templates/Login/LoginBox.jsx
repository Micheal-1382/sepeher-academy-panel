import logo from "@assets/images/logo.svg";
import { Link } from "react-router-dom";
import { Card, Image } from "@nextui-org/react";
import LoginForm from "./LoginForm";

const LoginBox = () => {
  return (
    <>
      <div className="flex items-center flex-col mt-4">
        <Image src={logo} alt="" width={100} />
        <h1 className="font-peyda !text-3xl mt-4">سپهر آکادمی | پنل</h1>
        <p className="font-peyda">ورود به حساب کاربری</p>
        <p className="font-peyda">
          ثبت نام نکرده اید؟
          <Link to="/register" className="me-2">
            ثبت نام
          </Link>
        </p>
      </div>
      <Card className="shadow-md p-5">
        <LoginForm />
      </Card>
    </>
  );
};

export default LoginBox;
