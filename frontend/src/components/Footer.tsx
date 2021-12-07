import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Badge} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import React from "react";
import api from "api";

const Footer = () => {
    const {data} = api.useGetApplicationInfoQuery();
    const github = "https://github.com/mddburgess/argent";

    return (
        <Container fluid className="bg-light fixed-bottom py-2 text-muted">
            <Row className="justify-content-end">
                {data?.build && <Col xs="auto">
                    version
                    <Badge bg="secondary" className="align-text-top ms-1">
                        <a href={`${github}/releases/tag/v${data.build.version}`}
                           className="link-light">
                            {data.build.version}
                        </a>
                    </Badge>
                </Col>}
                {data?.git && <Col xs="auto">
                    branch
                    <Badge bg="secondary" className="align-text-top ms-1">
                        <a href={`${github}/tree/${data.git.branch}`}
                           className="link-light">
                            {data.git.branch}
                        </a>
                    </Badge>
                </Col>}
                {data?.git && <Col xs="auto">
                    commit
                    <Badge bg="secondary" className="align-text-top ms-1">
                        <a href={`${github}/commit/${data.git.commit.id}`}
                           className="link-light">
                            {data.git.commit.id}
                        </a>
                    </Badge>
                </Col>}
            </Row>
        </Container>
    );
}

export default Footer;
