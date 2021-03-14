import React from "react";
import {Col, Row} from "react-bootstrap";
import {Answer} from "./Answer";
import {DivAnswer} from "./DivAnswer";

export const InGame:React.FC=():any=>{
return(
    <Row>
        <Col>
        <p>How old your elder brother was 10 years before you was born, mate?</p>
        <div>
            <Answer/>
        </div>
    </Col>
        <Col>
            <DivAnswer/>
        </Col>
    </Row>
)
}