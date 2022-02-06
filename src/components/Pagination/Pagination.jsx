import { Pagination as Pag } from "react-pagination-bar";
import { ReactComponent as ArrowNavLeft } from "../../images/arrowNavLeft.svg";
import { ReactComponent as ArrowNavRight } from "../../images/arrowNavRight.svg";
import "react-pagination-bar/dist/index.css";

export default function Pagination({
  dataForm,
  currentPage,
  totalItems,
  setCurrentPage,
}) {
  return (
    <div className="wrapper__pagination">
      {currentPage === 1 && Object.keys(dataForm).length !== 0 ? (
        <Pag
          totalItems={totalItems}
          itemsPerPage={4}
          initialPage={1}
          onPageСhange={(pageNumber) => setCurrentPage(pageNumber)}
          pageNeighbours={2}
          nextLabel={<ArrowNavRight />}
          prevLabel={<ArrowNavLeft />}
        />
      ) : (
        <Pag
          totalItems={totalItems}
          itemsPerPage={4}
          initialPage={currentPage}
          onPageСhange={(pageNumber) => setCurrentPage(pageNumber)}
          pageNeighbours={2}
          nextLabel={<ArrowNavRight />}
          prevLabel={<ArrowNavLeft />}
        />
      )}
    </div>
  );
}
