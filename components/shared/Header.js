import React, { useState } from "react";
import Link from "next/link";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

const BsNavLink = (props) => {
  const { href, title } = props;
  return (
    <Link className="nav-link port-navbar-link" href={href}>
      {title}
    </Link>
  );
};

const LoginLink = () => <BsNavLink href="/api/auth/login" title="login" />;

const LogoutLink = () => <BsNavLink href="/api/auth/logout" title="logout" />;

const Header = ({ user, loading, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className={`port-navbar port-default absolute ${className}`}
        // color="transparent"
        dark
        expand="md"
      >
        <div className="navbar-brend">
          <Link className="port-navbar-brand" href="/">
            Abaynech asaye
          </Link>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/" title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/about" title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/portfolios" title="Portfolios" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/blogs" title="Blogs" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/cv" title="Cv" />
            </NavItem>
            {/* <NavItem className="port-navbar-item">
              <BsNavLink href="/secret" title="secret" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/ssr" title="SecretSSR" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/admin" title="admin" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/adminssr" title="adminSSR" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="portfolios/new" title="new" />
            </NavItem> */}
          </Nav>
          <Nav navbar className="">
            {!loading && (
              <>
                {user && (
                  <NavItem className="port-navbar-item">
                    <LogoutLink />
                  </NavItem>
                )}
                {!user && (
                  <NavItem className="port-navbar-item">
                    <LoginLink />
                  </NavItem>
                )}
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
