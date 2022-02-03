import { useState } from "react";
import { Pagination as Pag } from "react-pagination-bar";
import { ReactComponent as ArrowNavLeft } from "../../images/arrowNavLeft.svg";
import { ReactComponent as ArrowNavRight } from "../../images/arrowNavRight.svg";
import "react-pagination-bar/dist/index.css";
const posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
  { id: 4, title: "Post 4" },
  { id: 5, title: "Post 5" },
  { id: 6, title: "Post 6" },
  { id: 7, title: "Post 7" },
  { id: 8, title: "Post 8" },
  { id: 9, title: "Post 9" },
  { id: 10, title: "Post 10" },
  { id: 11, title: "Post 11" },
  { id: 12, title: "Post 12" },
];

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 3;

  return (
    <div className="wrapper__pagination">
      {posts
        .slice((currentPage - 1) * pagePostsLimit, currentPage * pagePostsLimit)
        .map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      <Pag
        totalItems={500}
        itemsPerPage={4}
        onPageСhange={(pageNumber) => setCurrentPage(pageNumber)}
        pageNeighbours={2}
        nextLabel={<ArrowNavRight />}
        prevLabel={<ArrowNavLeft />}
      />
    </div>
  );
}
