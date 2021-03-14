import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import {Hand} from "../Hand";
import triangle from "../../assets/img/triangle.svg";

export const GameStart:React.FC<any> = ():any =>{
return(
    <Row>
        <Col>
    <Hand/>
        </Col>
        <Col>
            <div>Who wants to be a millionaire?</div>
            <div>
                <Button>Start</Button>
            </div>
        </Col>
        <div>
            <Button>Ru</Button>
        </div>
        <img src={triangle} alt="Like" />
    </Row>
)
}