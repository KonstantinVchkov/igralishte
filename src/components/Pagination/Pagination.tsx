import { IRenderPagination } from "@/types/ProjectTypes";
import style from "./style.module.css";

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}: IRenderPagination) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleClick = (number: number, e: React.MouseEvent) => {
    e.preventDefault();
    paginate(number);
  };
  const handleNextOrPrevios = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    type: string
  ) => {
    e.preventDefault();
    if (type === "handlePrevios" && currentPage > 1) {
      paginate(currentPage - 1);
    } else if (type === "handleNext" && currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };
  return (
    <nav>
      <ul className={style.Pagination}>
        <span onClick={(e) => handleNextOrPrevios(e, "handlePrevios")}>
          {"<"}
        </span>
        {pageNumbers.map((number) => (
          <li key={number} className={style.pageItem}>
            <a
              href={`http://localhost:3000/products?page=${number}`}
              onClick={(e) => handleClick(number, e)}
              className={`${style.pageLink} ${
                currentPage === number ? `${style.active}` : ""
              }`}
            >
              {number}
            </a>
          </li>
        ))}
        <span onClick={(e) => handleNextOrPrevios(e, "handleNext")}>{">"}</span>
      </ul>
    </nav>
  );
};

export default Pagination;
