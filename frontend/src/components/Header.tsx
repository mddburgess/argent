import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import api from "api";

const Header = () => {
    const {data, isLoading} = api.useListLedgerQuery();
    const sum = data?.map(item => item.amount).reduce((a, b) => a + b) ?? 0;
    const format = Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD",
        currencySign: "accounting"
    });

    return (
        <Navbar sticky="top" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand>Argent</Navbar.Brand>
                <Nav variant="pills" className="me-auto">
                    <Nav.Link active>Ledger</Nav.Link>
                </Nav>
                {isLoading || <>
                    <Navbar.Text>Current Balance</Navbar.Text>
                    <Navbar.Brand className={`ms-2 me-0 ${sum < 0 && "text-danger"}`}>
                        {format.format(sum)}
                    </Navbar.Brand>
                </>}
            </Container>
        </Navbar>
    );
}

export default Header;
