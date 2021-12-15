import {Ledger} from "types/Ledger";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {NavDropdown} from "react-bootstrap";
import {useAppSelector} from "store/hooks";

interface Props {
    item: Ledger
}

const SelectLedgerDropdownItem = ({item}: Props) => {
    const selected = useAppSelector(state => state.ledger.selected);
    const format = Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD",
        currencySign: "accounting"
    });

    return (
        <NavDropdown.Item active={item.id === selected}>
            <Row className="flex-nowrap">
                <Col>
                    {item.name}
                </Col>
                <Col xs="auto">
                    <small className={item.balance < 0 ? "text-danger" : "text-muted"}>
                        {format.format(item.balance)}
                    </small>
                </Col>
            </Row>
        </NavDropdown.Item>
    );
}

export default SelectLedgerDropdownItem;
