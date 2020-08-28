import React, { useContext } from "react";
import { ThemeContext } from "../themes/theme-context.js";

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

function ProjectCard(props) {
  const { theme } = useContext(ThemeContext);

  const {
    projectName,
    projectDescription,
    badge1,
    badge2,
    badge3,
    buttonRef,
    themeColor,
  } = props.value;

  return (
    <Card className={"card-lift--hover " + theme.cards + " shadow border-0"}>
      <CardBody className="py-5">
        <div
          className={
            "icon icon-shape icon-shape-" + themeColor + " rounded-circle mb-4"
          }
        >
          <i className="ni ni-check-bold" />
        </div>
        <h6 className={"text-" + theme.titles_color + " text-uppercase"}>
          {projectName}
        </h6>
        <p className={"description mt-3 text-" + theme.text_color}>
          {projectDescription}
        </p>
        <div>
          <Badge pill className={"mr-1  badge-" + themeColor}>
            {badge1}
          </Badge>
          <Badge pill className={"mr-1 badge-" + themeColor}>
            {badge2}
          </Badge>
          <Badge pill className={"mr-1 badge-" + themeColor}>
            {badge3}
          </Badge>
        </div>
        <Button
          className={"mt-4 badge-" + theme.card_button2}
          color={theme.card_button}
          href={buttonRef}
          target="_blank"
        >
          Saiba mais
        </Button>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
