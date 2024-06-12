import logo from "@assets/images/logo.svg";
import { Card, Image } from "@nextui-org/react";
import LoginForm from "./LoginForm";

const LoginBox = () => {
  return (
    <>
      <div className="flex items-center flex-col mt-4">
        <Image src={logo} alt="" width={100} />
        <h1 className="font-peyda !text-3xl mt-4">سپهر آکادمی | پنل</h1>
        <p className="font-peyda !text-lg">ورود به حساب کاربری</p>
      </div>
      <Card className="shadow-md p-5">
        <LoginForm />
      </Card>
    </>
  );
};

export default LoginBox;
