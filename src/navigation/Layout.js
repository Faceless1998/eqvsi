import React from "react";
import { Link } from "react-router-dom";
import "./layout.css";
export const Layout = () => {
  const pages = [
    { id: 1, name: "home" },
    { id: 2, name: "about" },
    { id: 3, name: "product" },
    { id: 4, name: "portfolio" },
    { id: 5, name: "contact" },
  ];

  return (
    <>
      <div className="nav">
        <div className="logo"> Logo </div>
        <div className="pages">
          {pages.map((page) => (
            <div key={page.id}>
              <div>
                <Link
                  to={page.name === "home" ? "/" : `/${page.name}`}
                  className="nav-item"
                >
                  {page.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
