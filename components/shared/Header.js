import React, { useState } from "react";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { isAuthorized } from "utils/isAuth";
import ReactResizeDetector from "react-resize-detector";
import ActiveLink from "./ActiveLink";

const BsNavLink = (props) => {
  const { href, title, className = "" } = props;
  return (
    <ActiveLink activeClassName="active" href={href}>
      <a className={`nav-link port-navbar-link ${className}`}>{title}</a>
    </ActiveLink>
  );
};

const LoginLink = () => <BsNavLink href="/api/auth/login" title="login" />;

const LogoutLink = () => <BsNavLink href="/api/auth/logout" title="logout" />;

const AdminMenu = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <Dropdown
      className="port-navbar-link port-dropdown-menu"
      nav
      isOpen={dropdown}
      toggle={() => setDropdown(!dropdown)}
    >
      <DropdownToggle className="port-dropdown-toggle" nav caret>
        Admin
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem>
          <BsNavLink
            className="port-dropdown-item"
            href="/portfolios/new"
            title="Create Portfolio"
          />
        </DropdownItem>
        <DropdownItem>
          <BsNavLink
            className="port-dropdown-item"
            href="/blogs/editor"
            title="Blog Editor"
          />
        </DropdownItem>
        <DropdownItem>
          <BsNavLink
            className="port-dropdown-item"
            href="/dashboard"
            title="Dashboard"
          />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

const Header = ({ user, loading, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
      <ReactResizeDetector handleWidth={true}>
        {({ width }) => (
          <Navbar 
            className={`port-navbar port-default absolute ${className} ${
              width < 768 && isOpen ? "is-open" : "is-closed"
            }`}
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
            <Collapse isOpen={isOpen} navbar className="collapse">
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
                <NavItem className="port-navbar-item">
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
            </NavItem>
              </Nav>
              <Nav navbar className="">
                {!loading && (
                  <>
                    {user && (
                      <>
                        {isAuthorized(user, "admin") && <AdminMenu />}
                        <NavItem className="port-navbar-item">
                          <LogoutLink />
                        </NavItem>
                      </>
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
        )}
      </ReactResizeDetector>
  );
};

export default Header;
