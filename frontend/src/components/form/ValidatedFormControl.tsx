import FormControl, {FormControlProps} from "react-bootstrap/FormControl";
import {FieldProps} from "formik";
import {useEffect, useRef} from "react";

type Props = Omit<FieldProps, "form"> & FormControlProps & {
    autoFocus?: boolean
};

const ValidatedFormControl = ({field, meta, autoFocus, ...props}: Props) => {
    const ref = useRef<HTMLInputElement>();

    useEffect(() => {
        if (autoFocus && ref.current) {
            ref.current.focus();
            ref.current.select();
        }
    }, [autoFocus]);

    return (
        <>
            <FormControl
                name={field.name}
                value={field.value}
                onChange={field.onChange}
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
