import AddLedgerEntryForm from "components/ledger/AddLedgerEntryForm";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import {useAppDispatch, useAppSelector} from "store/hooks";
import {editingActions} from "store/editing";

const AddLedgerEntryListItem = () => {
    const editing = useAppSelector(state => state.editing);
    const dispatch = useAppDispatch();

    if (editing.ledgerEntry === 0) {
        return (
            <ListGroupItem variant="primary">
                <AddLedgerEntryForm/>
            </ListGroupItem>
        )
    } else {
        const onClick = () => {
            dispatch(editingActions.setLedgerEntry(0));
        }
        return (
            <ListGroupItem action onClick={onClick}>
                Add ledger entry...
            </ListGroupItem>
        )
    }
}

export default AddLedgerEntryListItem;
