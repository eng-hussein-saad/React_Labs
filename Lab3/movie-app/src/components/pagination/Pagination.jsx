import "./Pagination.css";

function Pagination(props) {
  const { firstPage, lastPage, page, handlePageChange } = props;

  if (firstPage === 0 || lastPage === 0) {
    return (
      <div>
        <p>Error loading Pages</p>
      </div>
    );
  }
  //view first page, previous page, current page, next page and last page
  function getPageNumbers() {
    const pageList = [];
    pageList.push(firstPage);
    if (page > firstPage) {
      pageList.push(page - 1);
    }
    pageList.push(page);
    if (page < lastPage) {
      pageList.push(page + 1);
    }
    pageList.push(lastPage);
    return [...new Set(pageList)];
  }

  return (
    <nav aria-label="...">
      <ul className="pagination pagination-sm">
        {getPageNumbers().map((val, ind) =>
          val === page ? (
            <li key={ind} className="page-item active">
              <a
                className="page-link"
                href="#"
                onClick={() => {
                  handlePageChange(val);
                }}
              >
                {val}
              </a>
            </li>
          ) : (
            <li key={ind} className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={() => {
                  handlePageChange(val);
                }}
              >
                {val}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export default Pagination;
