import React from "react";
import {
  useCreateCourseApi,
  useGetCreateCourseApi,
} from "../../../hooks/api/useCoursesApi";
import { Controller, useForm } from "react-hook-form";
import {
  Accordion,
  AccordionItem,
  Autocomplete,
  AutocompleteItem,
  Input,
} from "@nextui-org/react";
import PrimaryInput from "../../Modules/Input/PrimaryInput";
import MainDatePicker from "../../Modules/DatePicker/MainDatePicker";
import EditorjsBox from "./EditorjsBox";
import MainButton from "../../Modules/Button/MainButton";

export default function AddCourseForm() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data, isLoading } = useGetCreateCourseApi();

  const { mutate: createCourseMutate, isPending: createCoursePending } =
    useCreateCourseApi(reset);

  const changeImageHandler = (event, onChange) => {
    onChange(event.target.files[0]);
  };

  const submitFormHandler = (data) => {
    const {
      year: startYear,
      month: startMonth,
      day: startDay,
    } = data.StartTime;
    const { year: endYear, month: endMonth, day: endDay } = data.EndTime;

    const StartTime = `${startYear}-${startMonth}-${startDay}`;
    const EndTime = `${endYear}-${endMonth}-${endDay}`;

    createCourseMutate({ ...data, StartTime, EndTime });
  };
  return (
    <form onSubmit={handleSubmit(submitFormHandler)} className="space-y-6">
      <Accordion variant="splitted" className="font-vazir px-0">
        <AccordionItem
          key={1}
          className="!shadow-none !bg-mainBodyBg text-lightTitle font-peyda"
          classNames={{
            title: ["text-right"],
          }}
          aria-label="مرحله اول (مشخصات اولیه)"
          title={"مرحله اول (مشخصات اولیه)"}
        >
          <div className="grid grid-cols-3 gap-2">
            <PrimaryInput
              placeholder={"عنوان دوره"}
              className={"font-peyda"}
              label={"عنوان دوره"}
              register={{
                ...register("Title", {
                  required: "عنوان دوره نمی تواند خالی باشد",
                }),
              }}
              isInvalid={Boolean(errors.Title?.message)}
              errorMessage={errors.Title?.message}
            />
            <PrimaryInput
              placeholder={"توضیح کوتاه"}
              className={"font-peyda"}
              label={"توضیح کوتاه"}
              register={{
                ...register("MiniDescribe", {
                  required: "توضیح کوتاه نمی تواند خالی باشد",
                }),
              }}
              isInvalid={Boolean(errors.MiniDescribe?.message)}
              errorMessage={errors.MiniDescribe?.message}
            />
            <PrimaryInput
              placeholder={"ظرفیت دوره"}
              className={"font-peyda"}
              label={"ظرفیت دوره"}
              register={{
                ...register("Capacity", {
                  required: "ظرفیت دوره نمی تواند خالی باشد",
                }),
              }}
              type="number"
              isInvalid={Boolean(errors.Capacity?.message)}
              errorMessage={errors.Capacity?.message}
            />
            <PrimaryInput
              placeholder={"مبلغ فعلی پرداخت دوره"}
              className={"font-peyda"}
              label={"مبلغ فعلی پرداخت دوره"}
              register={{
                ...register("CurrentCoursePaymentNumber", {
                  required: "مبلغ فعلی پرداخت دوره نمی تواند خالی باشد",
                }),
              }}
              type="number"
              isInvalid={Boolean(errors.CurrentCoursePaymentNumber?.message)}
              errorMessage={errors.CurrentCoursePaymentNumber?.message}
            />
            <Controller
              name="StartTime"
              rules={{ required: true }}
              defaultValue={null}
              control={control}
              render={({ field: { onChange, value } }) => (
                <MainDatePicker
                  label={"تاریخ شروع دوره"}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              name="EndTime"
              rules={{ required: true }}
              defaultValue={null}
              control={control}
              render={({ field: { onChange, value } }) => (
                <MainDatePicker
                  label={"تاریخ اتمام دوره"}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            <PrimaryInput
              placeholder={"مبلغ دوره"}
              className={"font-peyda"}
              label={"مبلغ دوره"}
              register={{
                ...register("Cost", {
                  required: "مبلغ دوره نمی تواند خالی باشد",
                }),
              }}
              type="number"
              isInvalid={Boolean(errors.Cost?.message)}
              errorMessage={errors.Cost?.message}
            />
          </div>
        </AccordionItem>
        <AccordionItem
          key={2}
          className="!shadow-none !bg-mainBodyBg text-lightTitle font-peyda"
          classNames={{
            title: ["text-right"],
          }}
          aria-label="مرحله دوم (مشخصات گوگل)"
          title={"مرحله دوم (مشخصات گوگل)"}
        >
          <div className="grid grid-cols-3 gap-2">
            <PrimaryInput
              placeholder={"شمای گوگل"}
              className={"font-peyda"}
              label={"شمای گوگل"}
              register={{
                ...register("GoogleSchema"),
              }}
              isInvalid={Boolean(errors.GoogleSchema?.message)}
              errorMessage={errors.GoogleSchema?.message}
            />
            <PrimaryInput
              placeholder={"عنوان گوگل"}
              className={"font-peyda"}
              label={"عنوان گوگل"}
              register={{
                ...register("GoogleTitle"),
              }}
              isInvalid={Boolean(errors.GoogleTitle?.message)}
              errorMessage={errors.GoogleTitle?.message}
            />
            <PrimaryInput
              placeholder={"آدرس اختصاصی"}
              className={"font-peyda"}
              label={"آدرس اختصاصی"}
              register={{
                ...register("UniqeUrlString", {
                  required: "آدرس اختصاصی دوره نمیتواند خالی باشد",
                }),
              }}
              isInvalid={Boolean(errors.UniqeUrlString?.message)}
              errorMessage={errors.UniqeUrlString?.message}
            />
            <PrimaryInput
              placeholder={"لینک کوتاه"}
              className={"font-peyda"}
              label={"لینک کوتاه"}
              register={{
                ...register("ShortLink"),
              }}
              isInvalid={Boolean(errors.ShortLink?.message)}
              errorMessage={errors.ShortLink?.message}
            />
          </div>
        </AccordionItem>
        <AccordionItem
          key={3}
          className="!shadow-none !bg-mainBodyBg text-lightTitle font-peyda"
          classNames={{
            title: ["text-right"],
          }}
          aria-label="مرحله سوم (آپلود عکس)"
          title={"مرحله سوم (آپلود عکس)"}
        >
          <div className="grid grid-cols-3 gap-2">
            <Controller
              name="Image"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  className="font-peyda"
                  variant="bordered"
                  label="عکس دوره"
                  placeholder="عکس دوره"
                  type="file"
                  value={null}
                  accept="image/png, image/gif, image/jpeg, image/jpg, image/webp"
                  onChange={(e) => changeImageHandler(e, onChange)}
                />
              )}
            />
            <PrimaryInput
              placeholder={"آدرس عکس"}
              className={"font-peyda"}
              label={"آدرس عکس"}
              register={{
                ...register("ImageAddress"),
              }}
              isInvalid={Boolean(errors.ImageAddress?.message)}
              errorMessage={errors.ImageAddress?.message}
            />
            <PrimaryInput
              placeholder={"آدرس تامبنیل عکس"}
              className={"font-peyda"}
              label={"آدرس تامبنیل عکس"}
              register={{
                ...register("TumbImageAddress"),
              }}
              isInvalid={Boolean(errors.TumbImageAddress?.message)}
              errorMessage={errors.TumbImageAddress?.message}
            />
          </div>
        </AccordionItem>
        <AccordionItem
          key={4}
          className="!shadow-none !bg-mainBodyBg text-lightTitle font-peyda"
          classNames={{
            title: ["text-right"],
          }}
          aria-label="مرحله چهارم (اطاعات استاد و گروه)"
          title={"مرحله چهارم (اطاعات استاد و گروه)"}
        >
          <div className="grid grid-cols-3 gap-2">
            <Controller
              name="CourseTypeId"
              rules={{ required: true }}
              defaultValue={null}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  listboxProps={{
                    emptyContent: "موردی یافت نشد.",
                  }}
                  label="نوع دوره"
                  variant="bordered"
                  defaultItems={data?.courseTypeDtos}
                  placeholder="لطفا نوع دوره را انتخاب کنید"
                  className="max-w-xs font-peyda"
                  selectedKey={value}
                  onSelectionChange={(newValue) => {
                    onChange(newValue);
                  }}
                  classNames={{ popoverContent: ["font-peyda"] }}
                  isLoading={isLoading}
                >
                  {(item) => (
                    <AutocompleteItem key={item.id}>
                      {item.typeName}
                    </AutocompleteItem>
                  )}
                </Autocomplete>
              )}
            />
            <Controller
              name="SessionNumber"
              rules={{ required: true }}
              defaultValue={null}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  listboxProps={{
                    emptyContent: "موردی یافت نشد.",
                  }}
                  label="وضعیت دوره"
                  variant="bordered"
                  defaultItems={data?.statusDtos}
                  placeholder="لطفا وضعیت دوره را انتخاب کنید"
                  className="max-w-xs font-peyda"
                  selectedKey={value}
                  onSelectionChange={(newValue) => {
                    onChange(newValue);
                  }}
                  classNames={{ popoverContent: ["font-peyda"] }}
                  isLoading={isLoading}
                >
                  {(item) => (
                    <AutocompleteItem key={item.id}>
                      {item.statusName}
                    </AutocompleteItem>
                  )}
                </Autocomplete>
              )}
            />
            <Controller
              name="TremId"
              rules={{ required: true }}
              defaultValue={null}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  listboxProps={{
                    emptyContent: "موردی یافت نشد.",
                  }}
                  label="ترم دوره"
                  variant="bordered"
                  defaultItems={data?.termDtos}
                  placeholder="لطفا ترم دوره را انتخاب کنید"
                  className="max-w-xs font-peyda"
                  selectedKey={value}
                  onSelectionChange={(newValue) => {
                    onChange(newValue);
                  }}
                  classNames={{ popoverContent: ["font-peyda"] }}
                  isLoading={isLoading}
                >
                  {(item) => (
                    <AutocompleteItem key={item.id}>
                      {item.termName}
                    </AutocompleteItem>
                  )}
                </Autocomplete>
              )}
            />
            <Controller
              name="ClassId"
              defaultValue={null}
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  listboxProps={{
                    emptyContent: "موردی یافت نشد.",
                  }}
                  label="کلاس دوره"
                  variant="bordered"
                  defaultItems={data?.classRoomDtos}
                  placeholder="لطفا کلاس دوره را انتخاب کنید"
                  className="max-w-xs font-peyda"
                  selectedKey={value}
                  onSelectionChange={(newValue) => {
                    onChange(newValue);
                  }}
                  classNames={{ popoverContent: ["font-peyda"] }}
                  isLoading={isLoading}
                >
                  {(item) => (
                    <AutocompleteItem key={item.id}>
                      {item.classRoomName}
                    </AutocompleteItem>
                  )}
                </Autocomplete>
              )}
            />
            <Controller
              name="CourseLvlId"
              defaultValue={null}
              rules={{ required: true }}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  listboxProps={{
                    emptyContent: "موردی یافت نشد.",
                  }}
                  label="سطح دوره"
                  variant="bordered"
                  defaultItems={data?.courseLevelDtos}
                  placeholder="لطفا سطح دوره را انتخاب کنید"
                  className="max-w-xs font-peyda"
                  selectedKey={value}
                  onSelectionChange={(newValue) => {
                    onChange(newValue);
                  }}
                  classNames={{ popoverContent: ["font-peyda"] }}
                  isLoading={isLoading}
                >
                  {(item) => (
                    <AutocompleteItem key={item.id}>
                      {item.levelName}
                    </AutocompleteItem>
                  )}
                </Autocomplete>
              )}
            />
            <Controller
              name="TeacherId"
              defaultValue={null}
              rules={{ required: true }}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  listboxProps={{
                    emptyContent: "موردی یافت نشد.",
                  }}
                  label="استاد"
                  variant="bordered"
                  defaultItems={data?.teachers}
                  placeholder="لطفا استاد را انتخاب کنید"
                  className="max-w-xs font-peyda"
                  selectedKey={value}
                  onSelectionChange={(newValue) => {
                    onChange(newValue);
                  }}
                  classNames={{ popoverContent: ["font-peyda"] }}
                  isLoading={isLoading}
                >
                  {(item) => (
                    <AutocompleteItem key={item.teacherId}>
                      {item.fullName}
                    </AutocompleteItem>
                  )}
                </Autocomplete>
              )}
            />
            <Controller
              name="TechId"
              rules={{ required: true }}
              defaultValue={null}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  listboxProps={{
                    emptyContent: "موردی یافت نشد.",
                  }}
                  label="دسته بندی"
                  variant="bordered"
                  defaultItems={data?.technologyDtos}
                  placeholder="لطفا دسته بندی را انتخاب کنید"
                  className="max-w-xs font-peyda"
                  selectedKey={value}
                  onSelectionChange={(newValue) => {
                    onChange(newValue);
                  }}
                  classNames={{ popoverContent: ["font-peyda"] }}
                  isLoading={isLoading}
                >
                  {(item) =>
                    item.parentId === null && (
                      <AutocompleteItem key={item.id}>
                        {item.techName}
                      </AutocompleteItem>
                    )
                  }
                </Autocomplete>
              )}
            />
          </div>
        </AccordionItem>
        <AccordionItem
          key={5}
          className="!shadow-none !bg-mainBodyBg text-lightTitle font-peyda"
          classNames={{
            title: ["text-right"],
          }}
          aria-label="مرحله آخر (توضیحات)"
          title={"مرحله آخر (توضیحات)"}
        >
          <Controller
            name="Describe"
            rules={{ required: true }}
            control={control}
            render={({ field: { onChange } }) => (
              <EditorjsBox onChange={onChange} />
            )}
          />
        </AccordionItem>
      </Accordion>
      <div className="flex items-center gap-2">
        <MainButton
          content={"پاکسازی"}
          className={"font-peyda !bg-secondary text-btnText"}
          onClick={() => reset()}
        />
        <MainButton
          content={"افزودن دوره"}
          className={"font-peyda !bg-primary text-btnText"}
          type="submit"
          isLoading={createCoursePending}
        />
      </div>
    </form>
  );
}
