import { Controller, useForm } from "react-hook-form";
import { useUserDetailsApi } from "../../../../hooks/api/useUserApi";
import { Accordion, AccordionItem, Checkbox, Spinner } from "@nextui-org/react";
import PrimaryInput from "../../Input/PrimaryInput";
import PrimaryTextarea from "../../Textarea/PrimaryTextarea";
import MainButton from "../../Button/MainButton";
import { useEffect } from "react";
import MainDatePicker from "../../DatePicker/MainDatePicker";
import { parseDate } from "@internationalized/date";
import trashIcon from "../../../../assets/icons/outlined/trash.svg";
import MainTooltip from "../../MainTooltip/MainTooltip";

export const UpdateBody = ({ userId, closeModal, action, actionLoading }) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const { data, isPending } = useUserDetailsApi(userId);

  useEffect(() => {
    if (data) {
      reset({
        fName: data.fName,
        lName: data.lName,
        userName: data.userName,
        gmail: data.gmail,
        phoneNumber: data.phoneNumber,
        recoveryEmail: data.recoveryEmail,
        userAbout: data.userAbout,
        linkdinProfile: data.linkdinProfile,
        telegramLink: data.telegramLink,
        homeAdderess: data.homeAdderess,
        nationalCode: data.nationalCode,
        active: data.active,
        isDelete: data.isDelete,
        isTecher: data.isTecher,
        isStudent: data.isStudent,
        twoStepAuth: data.twoStepAuth,
        birthDay: parseDate(data.birthDay.slice(0, 10)),
        insertDate: parseDate(data.insertDate.slice(0, 10)),
        roles: data.roles,
        courses: data.courses,
        coursesReseves: data.coursesReseves,
        // not implemented
        latitude: data.latitude,
        longitude: data.longitude,
        gender: data.gender,
        receiveMessageEvent: data.receiveMessageEvent,
        userProfileId: data.userProfileId,
      });
    }
  }, [data]);

  const submitFormHandler = (data) => {
    action(data);
  };

  const removeRoleHandler = (id, roles, onChange) => {
    const newRolesArray = roles.filter((role) => role.id !== id);
    onChange(newRolesArray);
  };

  const removeCourseHandler = (id, courses, onChange) => {
    const newCoursesArray = courses.filter((role) => role.courseId !== id);
    onChange(newCoursesArray);
  };

  if (isPending) {
    return (
      <div className="flex items-center justify-center gap-2">
        <p className="font-peyda">درحال بارگیری</p>
        <Spinner />
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit(submitFormHandler)} className="space-y-6">
      <p className="font-peyda text-xl mb-4">ویرایش کاربر</p>
      <Accordion variant="splitted" className="font-vazir px-0">
        <AccordionItem
          key={1}
          className="!shadow-none !bg-mainBodyBg text-lightTitle font-peyda"
          classNames={{
            title: ["text-right"],
          }}
          aria-label="مشخصات فردی"
          title={"مشخصات فردی"}
        >
          <div className="grid grid-cols-3 gap-3">
            <PrimaryInput
              placeholder={"نام"}
              label={"نام"}
              className={"font-peyda"}
              variant="faded"
              register={{
                ...register("fName", {
                  required: "نام نمی تواند خالی باشد",
                }),
              }}
              isInvalid={Boolean(errors.fName?.message)}
              errorMessage={errors.fName?.message}
            />
            <PrimaryInput
              placeholder={"نام خانوادگی"}
              className={"font-peyda"}
              label={"نام خانوادگی"}
              variant="faded"
              register={{
                ...register("lName", {
                  required: "نام خانوادگی نمی تواند خالی باشد",
                }),
              }}
              isInvalid={Boolean(errors.lName?.message)}
              errorMessage={errors.lName?.message}
            />
            <PrimaryInput
              placeholder={"نام کاربری"}
              className={"font-peyda"}
              label={"نام کاربری"}
              variant="faded"
              register={{
                ...register("userName", {
                  required: "نام کاربری نمی تواند خالی باشد",
                }),
              }}
              isInvalid={Boolean(errors.userName?.message)}
              errorMessage={errors.userName?.message}
            />
            <PrimaryInput
              placeholder={"ایمیل"}
              className={"font-peyda"}
              label={"ایمیل"}
              variant="faded"
              register={{
                ...register("gmail", {
                  required: "ایمیل نمی تواند خالی باشد",
                  pattern: {
                    value:
                      /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g,
                    message: "فرمت ایمیل وارد شده صحیح نیست",
                  },
                }),
              }}
              isInvalid={Boolean(errors.gmail?.message)}
              errorMessage={errors.gmail?.message}
            />
            <PrimaryInput
              placeholder={"شماره موبایل"}
              className={"font-peyda"}
              label={"شماره موبایل"}
              variant="faded"
              register={{
                ...register("phoneNumber", {
                  required: "شماره موبایل نمی تواند خالی باشد",
                }),
              }}
              isInvalid={Boolean(errors.phoneNumber?.message)}
              errorMessage={errors.phoneNumber?.message}
              type="number"
            />
            <PrimaryInput
              placeholder={"ایمیل بازنشانی"}
              className={"font-peyda"}
              label={"ایمیل بازنشانی"}
              variant="faded"
              register={{
                ...register("recoveryEmail", {
                  required: "ایمیل بازنشانی نمی تواند خالی باشد",
                  pattern: {
                    value:
                      /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g,
                    message: "فرمت ایمیل وارد شده صحیح نیست",
                  },
                }),
              }}
              isInvalid={Boolean(errors.recoveryEmail?.message)}
              errorMessage={errors.recoveryEmail?.message}
            />
            <PrimaryInput
              placeholder={"آدرس لینکدین"}
              label={"لینکدین"}
              className={"font-peyda"}
              variant="faded"
              register={{
                ...register("linkdinProfile"),
              }}
              isInvalid={Boolean(errors.linkdinProfile?.message)}
              errorMessage={errors.linkdinProfile?.message}
            />
            <PrimaryInput
              placeholder={"آدرس تلگرام"}
              label={"تلگرام"}
              className={"font-peyda"}
              variant="faded"
              register={{
                ...register("telegramLink"),
              }}
              isInvalid={Boolean(errors.telegramLink?.message)}
              errorMessage={errors.telegramLink?.message}
            />
            <PrimaryInput
              placeholder={"آدرس منزل"}
              label={"آدرس"}
              className={"font-peyda"}
              variant="faded"
              register={{
                ...register("homeAdderess"),
              }}
              isInvalid={Boolean(errors.homeAdderess?.message)}
              errorMessage={errors.homeAdderess?.message}
            />
            <PrimaryInput
              placeholder={"کدملی"}
              label={"کدملی"}
              className={"font-peyda"}
              variant="faded"
              register={{
                ...register("nationalCode", {
                  pattern: {
                    value: /^[0-9]{10}$/g,
                    message: "کدملی وارد شده صحیح نیست",
                  },
                }),
              }}
              isInvalid={Boolean(errors.nationalCode?.message)}
              errorMessage={errors.nationalCode?.message}
              type="number"
            />
            <Controller
              control={control}
              name="birthDay"
              render={({ field: { onChange, value } }) => (
                <MainDatePicker
                  label={"تاریخ تولد"}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="insertDate"
              render={({ field: { onChange, value } }) => (
                <MainDatePicker
                  label={"تاریخ ثبت کاربر"}
                  onChange={onChange}
                  isDisabled={true}
                  value={value}
                />
              )}
            />
            <PrimaryTextarea
              placeholder={"درباره من"}
              label={"درباره من"}
              className={"font-peyda"}
              variant="faded"
              register={{
                ...register("userAbout", {
                  required: "درباره من نمی تواند خالی باشد",
                }),
              }}
              isInvalid={Boolean(errors.userAbout?.message)}
              errorMessage={errors.userAbout?.message}
            />
            <div className="font-peyda">
              <Controller
                name="active"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Checkbox
                    isSelected={value}
                    onChange={(newValue) => onChange(newValue)}
                    classNames={{ label: ["mr-2"] }}
                  >
                    کاربر فعال است؟
                  </Checkbox>
                )}
              />
              <Controller
                name="isDelete"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Checkbox
                    isSelected={value}
                    onChange={(newValue) => onChange(newValue)}
                    classNames={{ label: ["mr-2"] }}
                  >
                    کاربر حذف شده است؟
                  </Checkbox>
                )}
              />
            </div>
            <div className="font-peyda">
              <Controller
                name="isTecher"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Checkbox
                    isSelected={value}
                    onChange={(newValue) => onChange(newValue)}
                    classNames={{ label: ["mr-2"] }}
                  >
                    آیا استاد است؟
                  </Checkbox>
                )}
              />
              <Controller
                name="isStudent"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Checkbox
                    isSelected={value}
                    onChange={(newValue) => onChange(newValue)}
                    classNames={{ label: ["mr-2"] }}
                  >
                    آیا دانشجو است؟
                  </Checkbox>
                )}
              />
            </div>
            <div className="font-peyda">
              <Controller
                name="twoStepAuth"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Checkbox
                    isSelected={value}
                    onChange={(newValue) => onChange(newValue)}
                    classNames={{ label: ["mr-2"] }}
                  >
                    احراز هویت دو مرحله ای
                  </Checkbox>
                )}
              />
            </div>
          </div>
        </AccordionItem>
        <AccordionItem
          key={2}
          className="!shadow-none !bg-mainBodyBg text-lightTitle font-peyda"
          classNames={{
            title: ["text-right"],
          }}
          aria-label="نقش ها"
          title={"نقش ها"}
        >
          <Controller
            name="roles"
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className="grid grid-cols-2 gap-4">
                {value.map((role, index) => (
                  <div
                    className="font-peyda border-[1px] rounded-xl p-2 bg-white flex items-center justify-between"
                    key={index}
                  >
                    <p>{role.roleName}</p>
                    <MainTooltip color={"danger"} content={"حذف"}>
                      <img
                        alt=""
                        src={trashIcon}
                        className="w-[20px]"
                        onClick={() =>
                          removeRoleHandler(role.id, value, onChange)
                        }
                      />
                    </MainTooltip>
                  </div>
                ))}
              </div>
            )}
          />
        </AccordionItem>
        <AccordionItem
          key={3}
          className="!shadow-none !bg-mainBodyBg text-lightTitle font-peyda"
          classNames={{
            title: ["text-right"],
          }}
          aria-label="دوره ها"
          title={"دوره ها"}
        >
          <Controller
            control={control}
            name="courses"
            render={({ field: { onChange, value } }) => (
              <div className="grid grid-cols-2 gap-4">
                {value.map((course, index) => (
                  <div
                    className="font-peyda border-[1px] rounded-xl p-2 bg-white flex items-center justify-between"
                    key={index}
                  >
                    <p>{course.title}</p>
                    <MainTooltip color={"danger"} content={"حذف"}>
                      <img
                        alt=""
                        src={trashIcon}
                        className="w-[20px]"
                        onClick={() =>
                          removeCourseHandler(course.courseId, value, onChange)
                        }
                      />
                    </MainTooltip>
                  </div>
                ))}
              </div>
            )}
          />
        </AccordionItem>
        <AccordionItem
          key={4}
          className="!shadow-none !bg-mainBodyBg text-lightTitle font-peyda"
          classNames={{
            title: ["text-right"],
          }}
          aria-label="دوره های رزرو"
          title={"دوره های رزرو"}
        >
          <Controller
            control={control}
            name="coursesReseves"
            render={({ field: { onChange, value } }) => (
              <div className="grid grid-cols-2 gap-4">
                {value.map((course, index) => (
                  <div
                    className="font-peyda border-[1px] rounded-xl p-2 bg-white flex items-center justify-between"
                    key={index}
                  >
                    <p>{course.courseName}</p>
                    <MainTooltip color={"danger"} content={"حذف"}>
                      <img
                        alt=""
                        src={trashIcon}
                        className="w-[20px]"
                        onClick={() =>
                          removeCourseHandler(course.courseId, value, onChange)
                        }
                      />
                    </MainTooltip>
                  </div>
                ))}
              </div>
            )}
          />
        </AccordionItem>
      </Accordion>
      <div className="flex items-center gap-2">
        <MainButton
          content={"بازگشت"}
          className={"!bg-primary text-btnText font-peyda"}
          onClick={closeModal}
        />
        <MainButton
          content={"بروزرسانی"}
          className={"!bg-secondary text-btnText font-peyda"}
          type="submit"
          isLoading={actionLoading}
        />
      </div>
    </form>
  );
};
