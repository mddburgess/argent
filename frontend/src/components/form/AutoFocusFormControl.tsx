import FormControl, {FormControlProps} from "react-bootstrap/FormControl";
import {useEffect, useRef} from "react";

const AutoFocusFormControl = (props: FormControlProps) => {
    const ref = useRef<HTMLInputElement>();

    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
            ref.current.select();
        }
    }, []);

    return (
        <FormControl ref={ref} {...props}/>
    )
}

export default AutoFocusFormControl;
