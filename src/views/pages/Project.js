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
import React, { useContext, useEffect, useRef, useState, A } from "react";
import { ThemeContext, themes } from "../themes/theme-context.js";
import ReactLoading from 'react-loading';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// reactstrap components
import { Button, Card, Container, Row, Col, Modal,  UncontrolledTooltip} from "reactstrap";

// core components
import TopNavBar from "../components/Navbars/TopNavBar.js";
import SimpleFooter from "../components/Footers/SimpleFooter.js";
import Separator from "views/components/separator.js";
import Banner from "../components/banner.js";


function Project(props) {
  const { theme } = useContext(ThemeContext);
  const main = useRef(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [projectInfo, setprojectInfo] = useState({});

  

  const projectId = props.match.params['id']

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    main.current.scrollTop = 0;
  });

  useEffect(() => {
    fetch(
      `https://cinopensource.herokuapp.com/api/redirect/github/repos/CS-Grad-Subjects`,
      {
        method: "GET"
      }
    )
      .then(res => res.json())
      .then(response => {
        console.log(response)
        setprojectInfo(response)
        setIsLoading(false)
      })
      .catch(error => console.log(error));
  }, [page]);


    return (
      <>
        <TopNavBar />
        <main className="profile-page" ref={main}>
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <Banner />
            {/* SVG separator */}
          <Separator/>
          </section>
          <section className="section">
            <Container>
          <Modal
          className="modal-dialog-centered"
          isOpen={isLoading}
          >
            <ReactLoading color="black"/>
          </Modal>
              <Card className={"card-profile " + theme.cards +" shadow mt--300"}>
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">

                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <a
                          className="mr-4 icon-theme"
                          href="#pablo"
                          size="sm"
                          id="tooltip112445444"
                        >
                    <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                    <UncontrolledTooltip delay={0} target="tooltip112445444">
                    Nosso repositório
                  </UncontrolledTooltip>
                        </a>

                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">{projectInfo.forks_count}</span>
                          <span className="description">Forks</span>
                        </div>
                        <div>
                          <span className="heading">{projectInfo.stargazers_count}</span>
                          <span className="description">Stars</span>
                        </div>
                        <div>
                          <span className="heading">{projectInfo.open_issues_count}</span>
                          <span className="description">Open Issues</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3 className={"text-" + theme.titles_color}>
                      {projectInfo.name}
                    </h3>
                    <div className="h6 mt-4">
                      <i className={"ni business_briefcase-24 mr-2" + " text-" + theme.titles_color } />
                      {projectInfo.language}
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p className={"text-" + theme.titles_color}>
                          {projectInfo.description}
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
      </>
    );
}

export default Project;
