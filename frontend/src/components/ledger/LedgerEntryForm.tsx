import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import {useState} from "react";
import {LedgerEntry} from "types/LedgerEntry";
import {Field, FieldProps, Form, Formik} from "formik";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {CheckCircleFill, TrashFill, XCircle} from "react-bootstrap-icons";
import {useAppDispatch} from "store/hooks";
import {editingActions} from "store/editing";
import IconButton from "components/form/IconButton";
import * as yup from "yup";
import ValidatedFormControl from "components/form/ValidatedFormControl";
import {useHotkeys} from "react-hotkeys-hook";

interface Props {
    initialState: Partial<LedgerEntry>;
    onSave: (ledgerEntry: Partial<LedgerEntry>) => void;
    onDelete?: (ledgerEntry: Partial<LedgerEntry>) => void;
}

const schema = yup.object().shape({
    entryDate: yup.date()
        .required("Required")
        .typeError("Invalid date"),
    payee: yup.string()
        .trim()
        .required("Required"),
    amount: yup.number()
        .required("Required")
        .typeError("Invalid amount")
});

const LedgerEntryForm = ({initialState, onSave, onDelete}: Props) => {
    const [ledgerEntry] = useState<Partial<LedgerEntry>>(initialState);
    const dispatch = useAppDispatch();

    const doSubmit = (values: Partial<LedgerEntry>) => {
        onSave(values);
        dispatch(editingActions.reset());
    }

    const doCancel = () => {
        dispatch(editingActions.reset());
    }

    const doDelete = () => {
        onDelete && onDelete(initialState);
        dispatch(editingActions.reset());
    }

    useHotkeys("esc", doCancel, {enableOnTags: ["INPUT"]});

    return (
        <Formik validationSchema={schema} initialValues={ledgerEntry} onSubmit={doSubmit}>
            <Form>
                <Row>
                    <Col xs={2}>
                        <Field name="entryDate" type="text">
                            {({...props}: FieldProps) => (
                                <ValidatedFormControl {...props}
                                    size="sm" placeholder="Date" autoFocus/>
                            )}
                        </Field>
                    </Col>
                    <Col>
                        <Field name="payee" type="text">
                            {({...props}: FieldProps) => (
                                <ValidatedFormControl {...props}
                                    size="sm" placeholder="Payee"/>
                            )}
                        </Field>
                    </Col>
                    <Col xs={2}>
                        <Field name="amount" type="text">
                            {({...props}: FieldProps) => (
                                <InputGroup size="sm" hasValidation={true}>
                                    <InputGroup.Text>$</InputGroup.Text>
                                    <ValidatedFormControl {...props}
                                        size="sm" placeholder="Amount"/>
                                </InputGroup>
                            )}
                        </Field>

                    </Col>
                    <Col xs="auto">
                        <ButtonGroup>
                            <IconButton icon={CheckCircleFill} type="submit"/>
                            <IconButton icon={XCircle} variant="secondary" onClick={doCancel}/>
                            {onDelete &&
                                <IconButton icon={TrashFill} variant="danger" onClick={doDelete}/>
                            }
                        </ButtonGroup>
                    </Col>
                </Row>
            </Form>
        </Formik>
    );
}

export default LedgerEntryForm;
