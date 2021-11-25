import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => (
    <Navbar sticky="top" bg="dark" variant="dark">
        <Container fluid>
            <Navbar.Brand>Argent</Navbar.Brand>
            <Nav variant="pills">
                <Nav.Link active>Ledger</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
)

export default Header;
