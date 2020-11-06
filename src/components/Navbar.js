import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Navbar() {
  const [active, setActive] = useState("Ice Breaker");
  useEffect(() => {
    const currentURL = window.location.href;
    if (currentURL.endsWith("/")) {
      setActive("Ice Breaker");
    } else if (currentURL.endsWith("/Projects")) {
      setActive("Projects");
    }
  }, [active]);
  return (
    <div className="navbar">
      <div className="navbar__active">{active}</div>
      <div className="navbar__items">
        {active !== "Ice Breaker" && (
          <Link to="/">
            <div
              className="navbar__item"
              onClick={() => setActive("Ice Breaker")}
            >
              Ice Breaker
            </div>
          </Link>
        )}
        {active !== "Projects" && (
          <Link to="/Projects">
            <div className="navbar__item" onClick={() => setActive("Projects")}>
              Projects
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
