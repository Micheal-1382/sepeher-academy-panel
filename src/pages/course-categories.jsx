import { useState } from "react";
import { useNavigate } from "react-router";
import { httpInterceptedService } from "@core/http-service";
import Modal from "../components/modal";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";


const CourseCategories = () => {
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleDeleteCategory = async () => {
    setShowDeleteModal(false);
    const response = httpInterceptedService.delete(
      `/CourseCategory/${selectedCategory}`
    );
    toast.promise(
      response,
      {
        pending: "در حال حذف ...",
        success: {
          render() {
            const url = new URL(window.location.href);
            navigate(url.pathname + url.search);
            return "عملیات با موفقیت انجام شد";
          },
        },
        error: {
          render({ data }) {
            return t("categoryList." + data.response.data.code);
          },
        },
      },
      {
        position: toast.POSITION.BOTTOM_LEFT,
      }
    );
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between mb-5">
            <h3 className="mb-0">دسته بندی دوره ها</h3>
            <button
              onClick={() => setShowAddCategory(true)}
              className="btn btn-primary fw-bolder  mt-n1"
            >
              <i className="fas fa-plus ms-2"></i>افزودن دسته جدید
            </button>
          </div>
        </div>
      </div>

      <Modal
        title="حذف"
        body="آیا از حذف این دسته اطمینان دارید؟"
        isOpen={showDeleteModal}
        close={setShowDeleteModal}
      >
        <button
          type="button"
          className="btn btn-secondary fw-bolder"
          onClick={() => setShowDeleteModal(false)}
        >
          انصراف
        </button>
        <button
          type="button"
          className="btn btn-primary fw-bolder"
          onClick={handleDeleteCategory}
        >
          حذف
        </button>
      </Modal>
    </>
  );
};

export default CourseCategories;
