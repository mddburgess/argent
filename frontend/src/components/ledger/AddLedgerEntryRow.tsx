import LedgerEntryForm from "components/ledger/LedgerEntryForm";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import {useAppDispatch, useAppSelector} from "store/hooks";
import {editingActions} from "store/editing";
import {useHotkeys} from "react-hotkeys-hook";
import {DateTime} from "luxon";
import {useCreateLedgerEntryMutation} from "api/ledgerEntries";

const AddLedgerEntryRow = () => {
    const [createLedgerEntry] = useCreateLedgerEntryMutation();
    const editing = useAppSelector(state => state.editing);
    const dispatch = useAppDispatch();

    const doClick = () => {
        dispatch(editingActions.setLedgerEntry(0));
    }

    useHotkeys("n", doClick, {enabled: editing.ledgerEntry === undefined});

    if (editing.ledgerEntry === 0) {
        const initialState = {
            entryDate: DateTime.now().toISODate(),
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
