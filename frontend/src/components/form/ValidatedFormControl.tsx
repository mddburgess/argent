import FormControl, {FormControlProps} from "react-bootstrap/FormControl";
import {FieldProps} from "formik";
import {ChangeEvent, useEffect, useRef} from "react";

type Props = FieldProps & FormControlProps & {
    autoFocus?: boolean
};

const ValidatedFormControl = ({field, form, meta, autoFocus, ...props}: Props) => {
    const ref = useRef<HTMLInputElement>();

    useEffect(() => {
        if (autoFocus && ref.current) {
            ref.current.focus();
            ref.current.select();
        }
    }, [autoFocus]);

    const doChange = (event: ChangeEvent<HTMLInputElement>) => {
        form.setFieldTouched(field.name, false);
        field.onChange(event);
    }

    return (
        <>
            <FormControl
                name={field.name}
                value={field.value}
                onChange={doChange}
                onBlur={field.onBlur}
                isInvalid={meta.touched && !!meta.error}
                ref={ref}
                {...props}
            />
            <FormControl.Feedback type="invalid">
                {meta.error}
            </FormControl.Feedback>
        </>
    );
};

export default ValidatedFormControl;
