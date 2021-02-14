import React from "react";
import { Container, Row, Col } from "../components/Grid";

function NoMatch() {
    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <h1>404 Page Not Found</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default NoMatch;