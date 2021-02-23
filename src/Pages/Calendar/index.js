import moment from "moment";
import React, { useState } from "react";
import RCalendar from "react-calendar";
import { Col, Row } from "reactstrap";

import Page from "../../Components/Page";
import { Strings } from "../../Constants/Strings";
import { content } from "../../Dummy/Calendar";
import "./styles.scss";

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD")
  );

  const renderContent = () => {
    const dayData = content.get(selectedDate);

    if (dayData) {
      return (
        <div className="d-flex flex-column justify-content-center">
          <h3>{dayData.name}</h3>
          <div className={"descriptionContainer"}>
            <p className={"description"}>{dayData.description}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="d-flex flex-column justify-content-center">
        <h3>{Strings.NU_EXISTA_DISPONIBILITATE}</h3>
      </div>
    );
  };

  return (
    <Page>
      <div className="d-flex justify-content-center">
        <h1 className="mb-5">Calendar</h1>
      </div>
      <Row className="mb-4">
        <Col>
          <RCalendar
            className="calendar"
            onClickDay={(day) => {
              setSelectedDate(moment(day).format("YYYY-MM-DD"));
            }}
            showDoubleView
          />
        </Col>
      </Row>
      <Row>
        <Col>{renderContent()}</Col>
      </Row>
    </Page>
  );
}

export default Calendar;
