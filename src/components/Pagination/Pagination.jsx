import { ReactComponent as ArrowNavLeft } from "../../images/arrowNavLeft.svg";
import { ReactComponent as ArrowNavRight } from "../../images/arrowNavRight.svg";
import Pagination from "react-js-pagination";

export default function Pag({ currentPage, totalItems, setCurrentPage }) {
  return (
    <div className="wrapper__pagination">
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={14}
        totalItemsCount={totalItems}
        pageRangeDisplayed={5}
        prevPageText={<ArrowNavLeft />}
        nextPageText={<ArrowNavRight />}
        onChange={(pageNumber) => setCurrentPage(pageNumber)}
      />
    </div>
  );
}
