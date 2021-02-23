import React from "react";
import { Col, Row } from "reactstrap";
import "./styles.scss";

function Page({ children }) {
  return (
    <Row className="content">
      <Col
        className="pt-5 offset-lg-2 offset-sm-1  d-flex flex-column h-100 "
        lg="8"
        sm="10"
      >
        {children}
      </Col>
    </Row>
  );
}

export default Page;
