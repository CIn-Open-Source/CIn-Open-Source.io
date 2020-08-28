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
import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components
import TopNavBar from "views/components/pages/node_modules/components/Navbars/TopNavBar.js.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Hero from "./components/Examples/Hero.js";
import Buttons from "./components/Examples/Buttons.js";
import Inputs from "./components/Examples/Inputs.js";
import CustomControls from "./components/Examples/CustomControls.js";
import Menus from "./components/Examples/Menus.js";
import Navbars from "./components/Examples/Navbars.js";
import Tabs from "./components/Examples/Tabs.js";
import Progress from "./components/Examples/Progress.js";
import Pagination from "./components/Examples/Pagination.js";
import Pills from "./components/Examples/Pills.js";
import Labels from "./components/Examples/Labels.js";
import Alerts from "./components/Examples/Alerts.js";
import Typography from "./components/Examples/Typography.js";
import Modals from "./components/Examples/Modals.js";
import Datepicker from "./components/Examples/Datepicker.js";
import TooltipPopover from "./components/Examples/TooltipPopover.js";
import Carousel from "./components/Examples/Carousel.js";
import Icons from "./components/Examples/Icons.js";
import Login from "./components/Examples/Login.js";
import Download from "./components/Examples/Download.js";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <TopNavBar />
        <main ref="main">
          <Hero />
          <Buttons />
          <Inputs />
          <section className="section">
            <Container>
              <CustomControls />
              <Menus />
            </Container>
          </section>
          <Navbars />
          <section className="section section-components">
            <Container>
              <Tabs />
              <Row className="row-grid justify-content-between align-items-center mt-lg">
                <Progress />
                <Pagination />
              </Row>
              <Row className="row-grid justify-content-between">
                <Pills />
                <Labels />
              </Row>
              <Alerts />
              <Typography />
              <Modals />
              <Datepicker />
              <TooltipPopover />
            </Container>
          </section>
          <Carousel />
          <Icons />
          <Login />
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Index;
