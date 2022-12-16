import { useEffect, useState } from "react";
import css from "./Nav.module.css";
import { ReactComponent as LogoNatflix } from "../images/logo.svg";
import { NavLink } from "react-router-dom";
import { Navigation } from "./Nav.styled";

// import Logo from "../image/Netflix.svg";

const Nav = () => {
  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
    console.log("yyy");
    window.addEventListener("scroll", () => {
      if (window.screenY > 100) {
        setHandleShow(true);
      } else {
        setHandleShow(false);
      }

      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  return (
    <Navigation handleShow>
      <NavLink to={"/"} className={css.logo}>
        <LogoNatflix className={css.logoIcon} />
        <span className={css.logoText}>NATFLIX</span>
      </NavLink>
    </Navigation>
  );
};

export default Nav;
