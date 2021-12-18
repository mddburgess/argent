import IconButton from "components/form/IconButton";
import {Pencil} from "react-bootstrap-icons";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {useAppDispatch, useAppSelector} from "store/hooks";
import {ledgerActions} from "store/ledger";

const LedgerActionToolbar = () => {
    const selected = useAppSelector(state => state.ledger.selected);
    const dispatch = useAppDispatch();

    const doClick = () => dispatch(ledgerActions.edit(selected));

    return selected ? (
        <ButtonGroup>
            <IconButton variant="outline-light" icon={Pencil} onClick={doClick}/>
        </ButtonGroup>
    ) : null;
}

export default LedgerActionToolbar;
