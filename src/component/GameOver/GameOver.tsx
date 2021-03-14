import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import {Hand} from "../Hand";

export const GameOver:React.FC<any> = ():any =>{
return(
    <Row>
        <Col>
    <Hand/>
        </Col>
        <Col>
            <div>Total score:</div>
            <div>$8,000 earned</div>
            <div>
                <Button>Try again</Button>
            </div>
        </Col>
    </Row>
)
}