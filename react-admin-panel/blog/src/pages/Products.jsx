import axios from "axios";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

import relateTime from "dayjs/plugin/relativeTime";
import { currencyFormatter } from "../utils/currencyFormatter";
import { Link, useLocation, useNavigate } from "react-router-dom";
dayjs.extend(relateTime);
export default function Product() {
  const [IsReady, setIsReady] = useState(false);

  const [page, setPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  const [searchQuery, setSearchQuery] = useState("");

  const [LocationQuery, setLocationQuery] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const newQuery = new URLSearchParams();
    newQuery.set("pageSize", pageSize);
    newQuery.set("page", currentPage);
    if (searchQuery !== "") {
      newQuery.set(`q`, searchQuery);
    }
    setLocationQuery(newQuery.toString());
  }, [pageSize, currentPage, searchQuery]);

  useEffect(() => {
    navigate(`/products?${LocationQuery}`);
  }, [LocationQuery]);

  useEffect(() => {
    if (IsReady) {
      getResult();
    }
  }, [IsReady]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.has("page")) {
      setCurrentPage(Number(searchParams.get("page")));
    }
    if (searchParams.has("pageSize")) {
      setPageSize(Number(searchParams.get("pageSize")));
    }
    if (searchParams.has("q")) {
      setSearchQuery(searchParams.get(`q`));
    }
    if (IsReady) {
      getResult();
    } else {
      setIsReady(true);
    }
  }, [location]);

  const getResult = () => {
    const urlParams = new URLSearchParams();
    urlParams.set(`pageSize`, pageSize);
    urlParams.set(`page`, currentPage);
    if (searchQuery !== "") {
      urlParams.set(`q`, searchQuery);
    }
    axios
      .get(`http://localhost:8000/products?${urlParams.toString()}`)
      .then((res) => {
        setPage(res.data);
      });
  };

  if (!page) {
    return (
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading ...</span>
      </div>
    );
  }
  const getPaginations = () => {
    let result = [];
    // first page adding
    result.push(
      <li className={`page-item ${1 === page.page && "active"}`}>
        <a className="page-link" href="#">
          1
        </a>
      </li>
    );
    // front trible dots
    if (page.page - 2 > 0) {
      result.push(
        <li className={`page-item`}>
          <span className="page-link">...</span>
        </li>
      );
    }
    if (page.page !== 1 && page.page !== page.totalPages) {
      result.push(
        <>
          {currentPage === 2 ? (
            <></>
          ) : (
            <li className={`page-item`}>
              <a href="#" className="page-link">
                {page.page - 1}
              </a>
            </li>
          )}
          <li className={`page-item active`}>
            <a href="#" className="page-link">
              {page.page - 1}
            </a>
          </li>
          {""}
          {currentPage === page.totalPages - 1 ? (
            <></>
          ) : (
            <li className={`page-item`}>
              <a className="page-link" href="#">
                {page.page + 1}
              </a>
            </li>
          )}
        </>
      );
    }
    if (page.page === 1) {
      result.push(
        <li className={`page-item`}>
          <span className="page-link">2</span>
        </li>
      );
    }

    if (page.page === pageSize) {
      result.push(
        <li className={`page-item`}>
          <span className="page-lnk">{page.totalPages - 1}</span>
        </li>
      );
    }

    if (page.totalPages - 2 >= page.page) {
      // back trible dots
      result.push(
        <li className={`page-item`}>
          <span className="page-link">...</span>
        </li>
      );
    }
    // last page adding
    result.push(
      <li className={`page-item ${page.totalPages === page.page && "active"}`}>
        <a className="page-link" href="#">
          {page.totalPages}
        </a>
      </li>
    );
    return result;
  };

  return (
    <main>
      <div className="container">
        <div className="d-flex justify-content-end mb-4">
          <label htmlFor="">
            Нэрээр хайх
            <input type="text" className="form-control" />
          </label>
          <label>
            Хуудаслалт &nbsp;
            <select
              className="form-control d-inline-block w-auto"
              onChange={(e) => setPageSize(e.target.value)}
              value={pageSize}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
        </div>
        <div className="row gy-4">
          {page.items.map((products) => {
            return (
              <div className="col-sm-3" key={products.id}>
                <div className="product-card">
                  <div className="product-card-img">
                    <img src={products.imageUrl} alt={products.name} />
                  </div>
                  <div className="product-card-desc">
                    <div className="product-card-date">
                      {dayjs(Number(products.createdAt) * 1000).fromNow()}
                    </div>
                    <div className="product-card-name">{products.name}</div>
                    <div className="product-card-price">
                      {currencyFormatter(products.price)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <nav aria-label="..." className="my-4">
          <ul className="pagination pagination-lg justify-content-center">
            <li className={`page-item ${currentPage === 1 && "disabled"}`}>
              <Link
                to={`/products?pageSize=${pageSize}&page=${currentPage - 1}`}
                className="page-link"
              >
                Previous
              </Link>
            </li>
            {getPaginations()}
            <li
              className={`page-item ${
                currentPage === page.totalPages && "disabled"
              }`}
            >
              <Link
                to={`/products?pageSize=${pageSize}&page=${currentPage + 1}`}
                className="page-link"
              >
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
