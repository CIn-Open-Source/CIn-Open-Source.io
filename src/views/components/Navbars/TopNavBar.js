/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, setState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useRoutes, A } from "hookrouter";

// reactstrap components
import { ThemeContext } from "../../themes/theme-context.js";
import ThemeTogglerButton from "../../themes/theme-toggler.js";

import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

function TopNavBar() {
  const { theme } = useContext(ThemeContext);

  const [collapseClasses, collapseOpen] = useState();
  const [newCollapseClasses, newCollapseOpen] = useState(0);
  const [nextCollapseClasses, nextCollapseOpen] = useState("");

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  });

  const onExiting = () => {
    setState({
      collapseClasses: "collapsing-out",
    });
  };

  const onExited = () => {
    setState({
      collapseClasses: "",
    });
  };

  return (
    <>
      <header className="header-global">
        <Navbar
          className={"navbar-main navbar-transparent navbar-light headroom ".concat(
            theme.navbar_color
          )}
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              <img
                alt="..."
                src={require("assets/img/brand/logo-fundo-colorido.png")}
              />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/img/brand/logo-fundo-branco.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-ui-04 d-lg-none mr-1" />
                    <span className="nav-link-inner--text nav-title">
                      Projetos
                    </span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-xl">
                    <div className="dropdown-menu-inner">
                      <Media
                        className="d-flex align-items-center"
                        href="/project/1"
                        target="_blank"
                      >
                        <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                          <i className="ni ni-paper-diploma" />
                        </div>
                        <Media body className="ml-3">
                          <h6 className="heading text-primary mb-md-1">
                            CS-grad-subjects
                          </h6>
                          <p className="description d-none d-md-inline-block mb-0">
                            Um guia informal de todas as cadeiras da faculdade
                            de ciência da computação do CIn Ufpe
                          </p>
                        </Media>
                      </Media>

                      <Media
                        className="d-flex align-items-center"
                        href="/project/2"
                        target="_blank"
                      >
                        <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                          <FontAwesomeIcon icon={["fas", "road"]} />
                        </div>
                        <Media body className="ml-3">
                          <h6 className="heading text-primary mb-md-1">
                            CIn developer roadmap
                          </h6>
                          <p className="description d-none d-md-inline-block mb-0">
                            Um roadmap para situar melhor estudantes ou
                            aspirantes no curso de CC do CIn
                          </p>
                        </Media>
                      </Media>
                      <Media
                        className="d-flex align-items-center"
                        href="/project/3"
                        target="_blank"
                      >
                        <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                          <FontAwesomeIcon icon={["fab", "blogger"]} />
                        </div>
                        <Media body className="ml-3">
                          <h6 className="heading text-primary mb-md-1">
                            Open Blog
                          </h6>
                          <p className="description d-none d-md-inline-block mb-0">
                            Plataforma para escrita de artigos no Medium com a
                            logo da comunidade
                          </p>
                        </Media>
                      </Media>
                      <Media
                        className="d-flex align-items-center"
                        href="/project/4"
                        target="_blank"
                      >
                        <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                          <FontAwesomeIcon icon={["fas", "laptop-code"]} />
                        </div>
                        <Media body className="ml-3">
                          <h6 className="heading text-primary mb-md-1">
                            CInOS API
                          </h6>
                          <p className="description d-none d-md-inline-block mb-0">
                            Uma API para quem quiser trabalhar com nossos dados
                            para fazer novos programas
                          </p>
                        </Media>
                      </Media>
                    </div>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://github.com/CIn-Open-Source"
                    id="tooltip112445449"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Github
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip112445449">
                    Nosso repositório
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://discord.gg/DksBwG9"
                    id="tooltip112445448"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={["fab", "discord"]} size="2x" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Discord
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip112445448">
                    Junte-se a nosso Discord!
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem className="nav-link-icon"></NavItem>
                <NavItem>
                  <ThemeTogglerButton />
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default TopNavBar;
