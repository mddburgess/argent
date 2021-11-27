import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import {useState} from "react";
import {LedgerEntry} from "types/LedgerEntry";
import {Field, Form, Formik} from "formik";
import FormControl from "react-bootstrap/FormControl";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {CheckCircleFill, TrashFill, XCircle} from "react-bootstrap-icons";
import {useAppDispatch} from "store/hooks";
import {editingActions} from "store/editing";
import AutoFocusFormControl from "components/form/AutoFocusFormControl";
import IconButton from "components/form/IconButton";

interface Props {
    initialState: Partial<LedgerEntry>;
    onSave: (ledgerEntry: Partial<LedgerEntry>) => void;
    onDelete?: (ledgerEntry: Partial<LedgerEntry>) => void;
}

const LedgerEntryForm = ({initialState, onSave, onDelete}: Props) => {
    const [ledgerEntry] = useState<Partial<LedgerEntry>>(initialState);
    const dispatch = useAppDispatch();

    const onSubmit = (values: Partial<LedgerEntry>) => {
        onSave(values);
        dispatch(editingActions.reset());
    }

    const onCancel = () => {
        dispatch(editingActions.reset());
    }

    const doDelete = () => {
        onDelete && onDelete(initialState);
        dispatch(editingActions.reset());
    }

    return (
        <Formik initialValues={ledgerEntry} onSubmit={onSubmit}>
            {() => (
                <Form>
                    <Row>
                        <Col xs={2}>
                            <Field name="entryDate" type="text"
                                   as={AutoFocusFormControl} size="sm" placeholder="Date"/>
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
                                <IconButton icon={CheckCircleFill} type="submit"/>
                                <IconButton icon={XCircle} variant="secondary" onClick={onCancel}/>
                                {onDelete &&
                                <IconButton icon={TrashFill} variant="danger" onClick={doDelete}/>
                                }
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    );
}

export default LedgerEntryForm;
