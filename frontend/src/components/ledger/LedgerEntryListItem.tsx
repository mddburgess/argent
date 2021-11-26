import {LedgerEntry} from "types/LedgerEntry";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import {Col, Row} from "react-bootstrap";

interface Props {
    item: LedgerEntry
}

const LedgerEntryListItem = ({item}: Props) => (
    <ListGroupItem>
        <Row>
            <Col xs={2}>{item.entryDate}</Col>
            <Col>{item.payee}</Col>
            <Col xs={2} className="text-end">{item.amount}</Col>
        </Row>
    </ListGroupItem>
);

export default LedgerEntryListItem;
