import ListGroupItem from "react-bootstrap/ListGroupItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LedgerEntryHeaderRow = () => (
    <ListGroupItem variant="secondary">
        <Row>
            <Col xs={2}>Date</Col>
            <Col>Payee</Col>
            <Col xs={2} className="text-end">Withdrawal</Col>
            <Col xs={2} className="text-end">Deposit</Col>
        </Row>
    </ListGroupItem>
);

export default LedgerEntryHeaderRow;
