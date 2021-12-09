import {LedgerEntry} from "types/LedgerEntry";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import {Col, Row} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "store/hooks";
import LedgerEntryForm from "components/ledger/LedgerEntryForm";
import {editingActions} from "store/editing";
import api from "api";

interface Props {
    item: LedgerEntry
    format: Intl.NumberFormat
}

const LedgerEntryRow = ({item, format}: Props) => {
    const [updateLedgerEntry] = api.useUpdateLedgerEntryMutation();
    const [deleteLedgerEntry] = api.useDeleteLedgerEntryMutation();
    const editing = useAppSelector(state => state.editing);
    const dispatch = useAppDispatch();

    if (editing.ledgerEntry === item.id) {
        return (
            <ListGroupItem variant="primary">
                <LedgerEntryForm initialState={item}
                                 onSave={updateLedgerEntry}
                                 onDelete={deleteLedgerEntry}/>
            </ListGroupItem>
        )
    } else {
        const onClick = () => {
            dispatch(editingActions.setLedgerEntry(item.id));
        }
        return (
            <ListGroupItem action onClick={onClick}>
                <Row>
                    <Col xs={2}>{item.entryDate}</Col>
                    <Col>{item.payee}</Col>
                    <Col xs={2} className="text-end">
                        {item.amount < 0 && format.format(-item.amount)}
                    </Col>
                    <Col xs={2} className="text-end">
                        {item.amount > 0 && format.format(item.amount)}
                    </Col>
                </Row>
            </ListGroupItem>
        );
    }
};

export default LedgerEntryRow;
