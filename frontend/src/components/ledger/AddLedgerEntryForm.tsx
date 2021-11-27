import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import {useState} from "react";
import {LedgerEntry} from "types/LedgerEntry";
import api from "api";
import {Field, Form, Formik} from "formik";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {CheckCircleFill, XCircle} from "react-bootstrap-icons";
import {useAppDispatch} from "store/hooks";
import {editingActions} from "store/editing";

const AddLedgerEntryForm = () => {
    const [ledgerEntry] = useState<Partial<LedgerEntry>>({});
    const [createLedgerEntry] = api.useCreateLedgerEntryMutation();
    const dispatch = useAppDispatch();

    const onSubmit = (values: Partial<LedgerEntry>) => {
        createLedgerEntry(values);
        dispatch(editingActions.reset());
    }

    const onCancel = () => {
        dispatch(editingActions.reset());
    }

    return (
        <Formik initialValues={ledgerEntry} onSubmit={onSubmit}>
            {() => (
                <Form>
                    <Row>
                        <Col xs={2}>
                            <Field name="entryDate" type="text"
                                   as={FormControl} size="sm" placeholder="Date"/>
                        </Col>
                        <Col>
                            <Field name="payee" type="text"
                                   as={FormControl} size="sm" placeholder="Payee"/>
                        </Col>
                        <Col xs={2}>
                            <InputGroup size="sm">
                                <InputGroup.Text>$</InputGroup.Text>
                                <Field name="amount" type="text"
                                       as={FormControl} size="sm" placeholder="Amount"/>
                            </InputGroup>
                        </Col>
                        <Col xs="auto">
                            <ButtonGroup>
                                <Button type="submit" className="btn-icon">
                                    <CheckCircleFill/>
                                </Button>
                                <Button variant="secondary" className="btn-icon" onClick={onCancel}>
                                    <XCircle/>
                                </Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    );
}

export default AddLedgerEntryForm;
