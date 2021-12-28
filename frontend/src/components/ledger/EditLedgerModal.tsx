import {useAppDispatch, useAppSelector} from "store/hooks";
import Modal from "react-bootstrap/Modal";
import {ledgerActions} from "store/ledger";
import Ledger from "types/Ledger";
import {useCreateLedgerMutation, useListLedgersQuery, useUpdateLedgerMutation} from "api/ledgers";
import LedgerModalForm from "components/ledger/LedgerModalForm";

const EditLedgerModal = () => {
    const [createLedger] = useCreateLedgerMutation();
    const [updateLedger] = useUpdateLedgerMutation();
    const editing = useAppSelector(state => state.ledger.editing);
    const dispatch = useAppDispatch();

    const {ledger} = useListLedgersQuery(undefined, {
        selectFromResult: ({data}) => ({
            ledger: data?.find((item) => item.id === editing)
        })
    });

    const doCancel = () => {
        dispatch(ledgerActions.edit(undefined));
    }

    const doCreate = (values: Partial<Ledger>) => {
        const result = createLedger(values);
        result.unwrap().then(createdLedger => {
            dispatch(ledgerActions.select(createdLedger.id));
            dispatch(ledgerActions.edit(undefined));
        });
    }

    const doUpdate = (values: Partial<Ledger>) => {
        updateLedger(values);
        dispatch(ledgerActions.edit(undefined));
    }

    return (
        <Modal show={editing !== undefined} onHide={doCancel}>
            <LedgerModalForm
                title={ledger ? "Edit Ledger" : "New Ledger"}
                ledger={ledger ?? {name: ""}}
                onSubmit={ledger ? doUpdate : doCreate}
                onCancel={doCancel}
            />
        </Modal>
    );
}

export default EditLedgerModal;
