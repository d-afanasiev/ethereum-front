import { Pagination as Pag } from "react-pagination-bar";
import { ReactComponent as ArrowNavLeft } from "../../images/arrowNavLeft.svg";
import { ReactComponent as ArrowNavRight } from "../../images/arrowNavRight.svg";
import "react-pagination-bar/dist/index.css";

export default function Pagination({ totalItems, setCurrentPage }) {
  return (
    <div className="wrapper__pagination">
      <Pag
        totalItems={totalItems}
        itemsPerPage={4}
        onPageСhange={(pageNumber) => setCurrentPage(pageNumber)}
        pageNeighbours={2}
        nextLabel={<ArrowNavRight />}
        prevLabel={<ArrowNavLeft />}
      />
    </div>
  );
}
