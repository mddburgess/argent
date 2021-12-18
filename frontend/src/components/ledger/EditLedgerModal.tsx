import {useAppDispatch, useAppSelector} from "store/hooks";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {ledgerActions} from "store/ledger";
import {Ledger} from "types/Ledger";
import {Field, FieldProps, Form, Formik as Formik} from "formik";
import {useCreateLedgerMutation} from "api/ledgers";
import ValidatedFormControl from "components/form/ValidatedFormControl";
import {FormGroup, FormLabel} from "react-bootstrap";
import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string()
        .trim()
        .required("Required")
});

const EditLedgerModal = () => {
    const [createLedger] = useCreateLedgerMutation();
    const editing = useAppSelector(state => state.ledger.editing);
    const dispatch = useAppDispatch();
    const initialLedger = {name: ""};

    const doCancel = () => {
        dispatch(ledgerActions.edit(undefined));
    }

    const doSubmit = (values: Partial<Ledger>) => {
        const result = createLedger(values);
        result.unwrap().then(ledger => {
            dispatch(ledgerActions.select(ledger.id));
            dispatch(ledgerActions.edit(undefined));
        });
    }

    return (
        <Modal show={editing !== undefined} onHide={doCancel}>
            <Formik validationSchema={schema} initialValues={initialLedger} onSubmit={doSubmit}>
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title>New Ledger</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup>
                            <FormLabel>Name</FormLabel>
                            <Field name="name" type="text">
                                {({...props}: FieldProps) => (
                                    <ValidatedFormControl {...props} autoFocus/>
                                )}
                            </Field>
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit">Create</Button>
                        <Button variant="outline-secondary" onClick={doCancel}>Cancel</Button>
                    </Modal.Footer>
                </Form>
            </Formik>
        </Modal>
    );
}

export default EditLedgerModal;
