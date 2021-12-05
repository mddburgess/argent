import LedgerEntryForm from "components/ledger/LedgerEntryForm";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import {useAppDispatch, useAppSelector} from "store/hooks";
import {editingActions} from "store/editing";
import api from "api";
import {useHotkeys} from "react-hotkeys-hook";

const AddLedgerEntryRow = () => {
    const [createLedgerEntry] = api.useCreateLedgerEntryMutation();
    const editing = useAppSelector(state => state.editing);
    const dispatch = useAppDispatch();

    const doClick = () => {
        dispatch(editingActions.setLedgerEntry(0));
    }

    useHotkeys("n", doClick, {enabled: editing.ledgerEntry === undefined});

    if (editing.ledgerEntry === 0) {
        const initialState = {
            entryDate: "",
            payee: "",
            amount: 0
        }
        return (
            <ListGroupItem variant="primary">
                <LedgerEntryForm initialState={initialState} onSave={createLedgerEntry}/>
            </ListGroupItem>
        )
    } else {
        return (
            <ListGroupItem action onClick={doClick}>
                Add ledger entry...
            </ListGroupItem>
        )
    }
}

export default AddLedgerEntryRow;