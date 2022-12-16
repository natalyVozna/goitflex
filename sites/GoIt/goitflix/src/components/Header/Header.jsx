import { HeaderStyled, NavItem, NavBox, Logo, LogoText } from "./Header.styled";
import { ReactComponent as LogoNatflix } from "../../images/logo.svg";

const navItems = [
  { href: "/", text: "Home" },
  { href: "movies", text: "Movies" },
];

const Header = () => {
  return (
    <HeaderStyled>
      <NavBox>
        <Logo>
          <LogoNatflix />
          <LogoText>NATFLIX</LogoText>
        </Logo>
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </NavBox>
    </HeaderStyled>
  );
};

export default Header;
