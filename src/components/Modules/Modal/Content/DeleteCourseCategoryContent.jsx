import MainButton from "../../../Modules/Button/MainButton";

export const Header = "هشدار";

export const Body = () => {
  return (
    <p className="font-peyda">آیا از حذف دسته بندی موردنظر مطمئن هستید؟</p>
  );
};

export const Footer = ({ triggerModal, action, actionLoading }) => {
  return (
    <>
      <MainButton
        content={"بازگشت"}
        className={"!bg-primary text-btnText font-peyda"}
        onClick={() => triggerModal(false)}
      />
      <MainButton
        content={"حذف"}
        className={"!bg-secondary text-btnText font-peyda"}
        onClick={action}
        isLoading={actionLoading}
      />
    </>
  );
};
