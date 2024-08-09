import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const Pagination = () => {
  const { page, totalPages, handlePagination } = useContext(AppContext);
  return (
    <div className="mx-auto w-full flex justify-center items-center fixed bottom-0 bg-white">
      <div className="flex justify-between w-[670px] py-3">
        <div className="flex gap-3">
          {page > 1 && (
            <button
              className="rounded-md border-2 border-gray-300 px-2 py-1"
              onClick={() => {
                handlePagination(page - 1);
              }}
            >
              Previous
            </button>
          )}

          {page < totalPages && (
            <button
              className="rounded-md border-2 border-gray-300 px-2 py-1"
              onClick={() => {
                handlePagination(page + 1);
              }}
            >
              Next
            </button>
          )}
        </div>

        <p className="text-sm font-bold">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
