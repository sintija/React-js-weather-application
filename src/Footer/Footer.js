import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './footer.css';

export default function Footer() {

    return (

        <div className="footer">

            <Row>
                <Col xs={12}>
                    <p>Open Source on <a target="_blank" rel="noreferrer" href={"https://github.com/sintija/shecodes-weather-app-react"}> Github </a> by Sintija</p>
                </Col>
            </Row>
        </div>

    );


}


