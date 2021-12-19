import IconButton from "components/form/IconButton";
import {Pencil, Trash} from "react-bootstrap-icons";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {useAppDispatch, useAppSelector} from "store/hooks";
import {ledgerActions} from "store/ledger";
import {useDeleteLedgerMutation, useListLedgersQuery} from "api/ledgers";

const LedgerActionToolbar = () => {
    const {ledgerCount} = useListLedgersQuery(undefined, {
        selectFromResult: ({data}) => ({ledgerCount: data?.length ?? 0})
    });
    const [deleteLedger] = useDeleteLedgerMutation();
    const selected = useAppSelector(state => state.ledger.selected);
    const dispatch = useAppDispatch();

    const doEdit = () => {
        dispatch(ledgerActions.edit(selected));
    }

    const doDelete = () => {
        if (selected) {
            deleteLedger(selected);
            dispatch(ledgerActions.select(undefined));
        }
    }

    return selected ? (
        <ButtonGroup>
            <IconButton variant="outline-light" icon={Pencil} onClick={doEdit}/>
            {ledgerCount > 1 &&
                <IconButton variant="outline-danger" icon={Trash} onClick={doDelete}/>
            }
        </ButtonGroup>
    ) : null;
}

export default LedgerActionToolbar;
