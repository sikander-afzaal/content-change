import React, { useEffect, useState } from "react";
import "./style.css";
import ProductCard from "./ProductCard";
import TablePagination from "@material-ui/core/TablePagination";
import { productsArray } from "./productsData";

function ProductsPage() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalProducts, setTotalProducts] = useState(productsArray.length);
  const [displayProducts, setDisplayProducts] = useState(
    productsArray.slice(0, rowsPerPage)
  );

  const handleChangePage = (event, newPage) => {
    // console.log("new page", newPage)
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    //   console.log("page value==>", event.target.value)
  };

  useEffect(() => {
    console.log(" page=>", page);
    console.log("rows per page=>", rowsPerPage);
    console.log("from=>", page * rowsPerPage);
    console.log("to=>", (page + 1) * rowsPerPage);
    setDisplayProducts(
      productsArray.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, rowsPerPage]);
  console.log(displayProducts);
  return (
    <div>
      <div className="banner-hero">
        <h1>Nataliia Beauty</h1>
        <a href="#courses">Courses</a>
      </div>
      <div className="products-section" id="courses">
        <div className="container">
          <div
            className="row"
            style={{
              gap: "20px",
              padding: "40px 0px",
              alignItems: "flex-start",
              justifyContent: "space-evenly",
            }}
          >
            {displayProducts.map((v, i) => (
              <div key={i} className="col-md-4 p-0">
                <ProductCard product={v} id={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
