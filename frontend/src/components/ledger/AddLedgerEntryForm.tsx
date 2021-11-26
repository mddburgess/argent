import Col from "react-bootstrap/Col";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import {useState} from "react";
import {LedgerEntry} from "types/LedgerEntry";
import api from "api";
import {Field, Form, Formik} from "formik";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

const AddLedgerEntryForm = () => {
    const [ledgerEntry] = useState<Partial<LedgerEntry>>({});
    const [createLedgerEntry] = api.useCreateLedgerEntryMutation();

    return (
        <ListGroupItem variant="primary">
            <Formik initialValues={ledgerEntry} onSubmit={createLedgerEntry}>
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
                                <Button type="submit" size="sm">Save</Button>
                            </Col>
                        </Row>
                    </Form>
                )}
            </Formik>
        </ListGroupItem>
    );
}

export default AddLedgerEntryForm;
