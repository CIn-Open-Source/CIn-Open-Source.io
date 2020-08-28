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
import React, { useContext, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  FormGroup,
  Input,
  Row,
  Col,
} from "reactstrap";

// core components
import TopNavBar from "../components/Navbars/TopNavBar.js";
import CardsFooter from "../components/Footers/CardsFooter.js";

// index page sections
import Typist from "react-typist";

import { ThemeContext, themes } from "../themes/theme-context.js";
import Banner from "../components/banner.js";

// Components
import ProjectCard from "../components/project-card.js";
import Separator from "../components/separator.js";

function Landing() {
  const { theme } = useContext(ThemeContext);
  const main = useRef(null);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    main.current.scrollTop = 0;
  });

  return (
    <>
      <TopNavBar />
      <main ref={main}>
        <div className="position-relative">
          <section className={"section section-lg section-shaped pb-250"}>
            <Banner />
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="12">
                    <Typist className="TypistExample-message">
                      <span className="display-3 text-white">
                        Desenvolvendo para você
                      </span>
                      <Typist.Backspace count={4} delay={400} />
                      <span className="display-3 text-white">a comunidade</span>
                    </Typist>
                    <p className="lead text-white">
                      The design system comes with four pre-built pages to help
                      you get started faster. You can change the text and images
                      and you're good to go.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
            <Separator />
          </section>
        </div>

        <section className="section section-lg pt-lg-0 mt--200">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <span className="display-4 text-white">
                  Principais projetos:
                </span>
                <Row className="row-grid">
                  <Col lg="4">
                    <ProjectCard
                      value={{
                        projectName: "CS Grad Subjects",
                        projectDescription: "Lorem ipsum solor domet anor",
                        badge1: "Consulta",
                        badge2: "aa",
                        buttonRef: "http://www.google.com",
                        themeColor: theme.card1,
                      }}
                    />
                  </Col>
                  <Col lg="4">
                    <ProjectCard
                      value={{
                        projectName: "CS Grad Subjects",
                        projectDescription: "Lorem ipsum solor domet anor",
                        badge1: "Consulta",
                        badge2: "aa",
                        buttonRef: "http://www.google.com",
                        themeColor: theme.card2,
                      }}
                    />
                  </Col>
                  <Col lg="4">
                    <ProjectCard
                      value={{
                        projectName: "CS Grad Subjects",
                        projectDescription: "Lorem ipsum solor domet anor",
                        badge1: "Consulta",
                        badge2: "aa",
                        buttonRef: "http://www.google.com",
                        themeColor: theme.card3,
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section section-lg">
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-md-2" md="6">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("assets/img/theme/promo-1.png")}
                />
              </Col>
              <Col className="order-md-1" md="6">
                <div className="pr-md-5">
                  <div
                    className={
                      "icon icon-lg icon-shape icon-shape-" +
                      theme.idea_icon1 +
                      " shadow rounded-circle mb-5"
                    }
                  >
                    <FontAwesomeIcon icon={["fas", "lightbulb"]} />
                  </div>
                  <h3 className={"text-" + theme.titles_color}>A ideia</h3>
                  <p className={"text-" + theme.titles_color}>
                    Ajudar pessoas do CIn a passarem pelas fases difícies e
                    também fornecer um meio de passar conhecimento adiante para
                    os novos estudantes. A base é criar uma comunidade que gosta
                    de participar e aprender, com oportunidades diversas para se
                    desenvolver.
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color={theme.idea_icon2}
                            >
                              <FontAwesomeIcon icon={["fas", "keyboard"]} />
                            </Badge>
                          </div>
                        </div>
                        <div>
                          <h6 className={"mb-0 text-" + theme.text_color}>
                            Escrever resumos e exercícios
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge
                            className="badge-circle mr-3"
                            color={theme.idea_icon3}
                          >
                            <FontAwesomeIcon icon={["fas", "keyboard"]} />
                          </Badge>
                        </div>
                        <div>
                          <h6 className={"mb-0 text-" + theme.text_color}>
                            Programar em alto nível
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color={theme.idea_icon4}
                            >
                              <FontAwesomeIcon icon={["fas", "keyboard"]} />
                            </Badge>
                          </div>
                        </div>
                        <div>
                          <h6 className={"mb-0 text-" + theme.text_color}>
                            Participar de comunidade de aprendizado
                          </h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className={"section pb-0 " + theme.contribute_gradient}>
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-lg-2 ml-lg-auto" md="6">
                <div className="position-relative pl-md-5">
                  <img
                    alt="..."
                    className="img-center img-fluid"
                    src={require("assets/img/ill/ill-2.svg")}
                  />
                </div>
              </Col>
              <Col className="order-lg-1" lg="6">
                <div className="d-flex px-3">
                  <div>
                    <div
                      className={
                        "icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-" +
                        theme.contribute_icon
                      }
                    >
                      <i
                        className={
                          "ni ni-building text-" + theme.contribute_icon
                        }
                      />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h4 className="display-3 text-white">Como contribuir?</h4>
                    <p className="text-white">
                      Temos diversos repositórios que precisam de contribuição
                      para continuarem ajudando pessoas. Considere ajudar de
                      qualquer forma que você possa e ainda participe de uma
                      comunidade de aprendizado.
                    </p>
                  </div>
                </div>
                <Card
                  className={
                    "shadow " + theme.bottom_cards + " shadow-lg--hover mt-5"
                  }
                >
                  <CardBody>
                    <div className="d-flex px-3">
                      <div>
                        <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                          <i className="ni ni-satisfied" />
                        </div>
                      </div>
                      <div className="pl-4">
                        <h5 className={"title text-" + theme.titles_color}>
                          Primeira Viagem
                        </h5>
                        <p className={"text-" + theme.text_color}>
                          Você não é da área de programação ou não tem
                          experiência ainda, mas quer contribuir da forma que
                          puder e aprender.
                        </p>
                        <a
                          className="text-success"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Saiba mais
                        </a>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card
                  className={
                    "shadow " + theme.bottom_cards + " shadow-lg--hover mt-5"
                  }
                >
                  <CardBody>
                    <div className="d-flex px-3">
                      <div>
                        <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                          <FontAwesomeIcon icon={["fas", "fire"]} />
                        </div>
                      </div>
                      <div className="pl-4">
                        <h5 className={"title text-" + theme.titles_color}>
                          Já sou experiente
                        </h5>
                        <p className={"text-" + theme.text_color}>
                          Você já manja mais de programação ou está mais
                          acostumado com contribuições open-source e quer
                          começar logo antes a ajudar os repositórios.
                        </p>
                        <a
                          className="text-warning"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Saiba mais
                        </a>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          <Separator />
        </section>
        <section className="section section-lg">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <h2 className={"display-3 text-" + theme.titles_color}>
                  O time
                </h2>
                <p className={"lead text-" + theme.text_color}>
                  As pessoas que atualmente contribuem ou contribuíram para
                  nossa plataforma.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="mb-5 mb-lg-0" lg="6" md="6">
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-guila.jpg")}
                    style={{ width: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className={"d-block mb-1 text-" + theme.text_color}>
                        Guilao
                      </span>
                    </h5>
                    <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="warning"
                        href="https://twitter.com/Guilao_Limao"
                      >
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="warning"
                        href="www.github.com/Gui-Lima"
                      >
                        <FontAwesomeIcon icon={["fab", "github"]} />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="warning"
                        href="https://www.linkedin.com/in/guilherme-lima-b43a5a160/"
                      >
                        <FontAwesomeIcon icon={["fab", "linkedin"]} />
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="6" md="6">
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-eden.png")}
                    style={{ width: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className={"d-block mb-1 text-" + theme.text_color}>
                        Edinho
                      </span>
                    </h5>
                    <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="primary"
                        href="https://twitter.com/Guilao_Limao"
                      >
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="primary"
                        href="www.github.com/Gui-Lima"
                      >
                        <FontAwesomeIcon icon={["fab", "github"]} />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="primary"
                        href="https://www.linkedin.com/in/guilherme-lima-b43a5a160/"
                      >
                        <FontAwesomeIcon icon={["fab", "linkedin"]} />
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg pt-0">
          <Container>
            <Card
              className={
                "bg-gradient-" +
                theme.contribute_banner_gradient +
                " shadow-lg border-0"
              }
            >
              <div className="p-5">
                <Row className="align-items-center">
                  <Col lg="8">
                    <h3 className="text-white">
                      Nós precisamos de contribuidores!
                    </h3>
                    <p className="lead text-white mt-3">
                      Caso queira contribuir nos repositórios internos (como o
                      desse site) e ser listado na lista acima, preencha com seu
                      email =)
                    </p>
                  </Col>
                  <Col className="ml-lg-auto" lg="3">
                    <Row className="align-items-center justify-items-center">
                      <FormGroup>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="name@cin.ufpe.br"
                          type="email"
                        />
                      </FormGroup>
                      <Button color="success" size="sm">
                        Enviar
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Card>
          </Container>
        </section>
      </main>
      <CardsFooter />
    </>
  );
}

export default Landing;
