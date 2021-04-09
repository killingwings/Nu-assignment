import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

function MoreInfo(props) {
  const { country } = props;
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <p onClick={showSidebar}>{country.name}</p>
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <div className="nav-menu-items">
            <div className="navbar-toggle">
              <section className="nav-text">
                <img src={country.flag} alt="" width="32px" height="32px" />
                <h1>{country.name}</h1>
                <div className="closeBar" onClick={showSidebar}>
                  <AiIcons.AiOutlineClose />
                </div>
              </section>
              <h3>Capital : {country.capital}</h3>
              <p>region : {country.region}</p>
              <p>population : {country.population}</p>
              <p>Country Code : {country.numericCode}</p>
            </div>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default MoreInfo;
