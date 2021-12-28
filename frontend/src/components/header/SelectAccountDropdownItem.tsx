import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {NavDropdown} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "store/hooks";
import Account from "types/Account";
import {accountActions} from "store/account";

interface Props {
    item: Account
}

const SelectAccountDropdownItem = ({item}: Props) => {
    const selected = useAppSelector(state => state.account.selected);
    const dispatch = useAppDispatch();
    const format = Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD",
        currencySign: "accounting"
    });

    const doClick = () => dispatch(accountActions.select(item.id));

    return (
        <NavDropdown.Item active={item.id === selected} onClick={doClick}>
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

export default SelectAccountDropdownItem;
