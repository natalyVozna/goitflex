import { useEffect, useState } from "react";
import css from "./Nav.module.css";
import Logo from "../image/Netflix.svg";

const Nav = () => {
  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
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
    <div className={`${css.nav} ${handleShow && css.nav__black}`}>
      {/* <img className={css.nav__logo} src="" alt="logo" /> */}
      <div className={css.logo}>
        <span className={css.logo__char1}>G</span>
        <span className={css.logo__char2}>O</span>
        <span className={css.logo__char3}>I</span>
        <span className={css.logo__char4}>T</span>
        <span className={css.logo__char5}>F</span>
        <span className={css.logo__char6}>L</span>
        <span className={css.logo__char7}>I</span>
        <span className={css.logo__char8}>X</span>
      </div>
      <img src={Logo} alt="" width="80" height="30" />
    </div>
  );
};

export default Nav;
