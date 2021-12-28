import {Field, FieldProps, Form, Formik} from "formik";
import Modal from "react-bootstrap/Modal";
import {FormGroup, FormLabel} from "react-bootstrap";
import ValidatedFormControl from "components/form/ValidatedFormControl";
import Button from "react-bootstrap/Button";
import * as yup from "yup";
import Ledger from "types/Ledger";

interface Props {
    title: string;
    ledger: Partial<Ledger>;
    onSubmit: (ledger: Partial<Ledger>) => void;
    onCancel: () => void;
}

const schema = yup.object().shape({
    name: yup.string()
        .trim()
        .required("Required")
});

const LedgerModalForm = ({title, ledger, onSubmit, onCancel}: Props) => (
    <Formik validationSchema={schema} initialValues={ledger} onSubmit={onSubmit}>
        <Form>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
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
                <Button type="submit">Save</Button>
                <Button variant="outline-secondary" onClick={onCancel}>Cancel</Button>
            </Modal.Footer>
        </Form>
    </Formik>
);

export default LedgerModalForm;
