import Button, {ButtonProps} from "react-bootstrap/Button";
import {Icon} from "react-bootstrap-icons";
import "components/form/IconButton.css";

type Props = ButtonProps & {
    icon: Icon
}

const IconButton = ({icon, ...props}: Props) => {
    const ButtonIcon = icon;
    return (
        <Button className="btn-icon" {...props}>
            <ButtonIcon/>
        </Button>
    );
}

export default IconButton;
