import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SelectAccountDropdown from "components/header/SelectAccountDropdown";
import CurrentBalance from "components/header/CurrentBalance";
import LedgerActionToolbar from "components/ledger/LedgerActionToolbar";

const Header = () => (
    <Navbar sticky="top" bg="dark" variant="dark">
        <Container fluid>
            <Navbar.Brand>Argent</Navbar.Brand>
            <Nav variant="pills" className="me-auto">
                <SelectAccountDropdown/>
                <LedgerActionToolbar/>
            </Nav>
            <CurrentBalance/>
        </Container>
    </Navbar>
)

export default Header;
