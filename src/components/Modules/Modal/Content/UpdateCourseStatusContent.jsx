import React from "react";
import {
  useCourseStatusApi,
  useUpdateCourseStatusApi,
} from "../../../../hooks/api/useCoursesApi";
import { Autocomplete, AutocompleteItem, Spinner } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import MainButton from "../../Button/MainButton";

export default function UpdateCourseStatusContent({ closeModal, CourseId }) {
  const { control, handleSubmit } = useForm();
  const { data, isLoading } = useCourseStatusApi();

  const { mutate: updateStatusMutate, isPending: updateStatusPending } =
    useUpdateCourseStatusApi(closeModal);

  const submitFormHandler = (data) => {
    updateStatusMutate({ ...data, CourseId });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center gap-2 font-peyda">
        <p>درحال بارگیری</p>
        <Spinner />
      </div>
    );
  }
  return (
    <>
      <h3 className="font-peyda text-2xl mt-4">ویرایش وضعیت دوره</h3>
      <form onSubmit={handleSubmit(submitFormHandler)} className="space-y-6">
        <Controller
          name="StatusId"
          defaultValue={null}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              label="وضعیت دوره"
              variant="bordered"
              defaultItems={data}
              placeholder="لطفا یک وضعیت انتخاب کنید"
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
        <div className="flex items-center gap-2">
          <MainButton
            content={"بازگشت"}
            className={"!bg-primary text-btnText font-peyda"}
            onClick={closeModal}
          />
          <MainButton
            content={"ویرایش وضعیت دوره"}
            type="submit"
            className={"!bg-secondary text-btnText font-peyda"}
            isLoading={updateStatusPending}
          />
        </div>
      </form>
    </>
  );
}
