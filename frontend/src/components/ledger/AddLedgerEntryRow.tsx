import LedgerEntryForm from "components/ledger/LedgerEntryForm";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import {useAppDispatch, useAppSelector} from "store/hooks";
import {editingActions} from "store/editing";
import api from "api";

const AddLedgerEntryRow = () => {
    const [createLedgerEntry] = api.useCreateLedgerEntryMutation();
    const editing = useAppSelector(state => state.editing);
    const dispatch = useAppDispatch();

    if (editing.ledgerEntry === 0) {
        return (
            <ListGroupItem variant="primary">
                <LedgerEntryForm initialState={{}} onSave={createLedgerEntry}/>
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

export default AddLedgerEntryRow;
