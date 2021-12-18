import {NavDropdown} from "react-bootstrap";
import SelectLedgerDropdownItem from "components/header/SelectLedgerDropdownItem";
import {useAppDispatch, useAppSelector} from "store/hooks";
import {useEffect} from "react";
import {ledgerActions} from "store/ledger";
import {useListLedgersQuery} from "api/ledgers";

const SelectLedgerDropdown = () => {
    const {data} = useListLedgersQuery();
    const selected = useAppSelector(state => state.ledger.selected);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (data && !selected) {
            dispatch(ledgerActions.select(data[0].id));
        }
    }, [data, selected, dispatch]);

    const doClickNew = () => dispatch(ledgerActions.edit(0));

    if (data) {
        const selectedName = data.find(item => item.id === selected)?.name ?? "Ledgers";

        return (
            <NavDropdown title={`${selectedName} `} className="me-2">
                {data.map(item => <SelectLedgerDropdownItem key={item.id} item={item}/>)}
                <NavDropdown.Divider/>
                <NavDropdown.Item onClick={doClickNew}>New ledger...</NavDropdown.Item>
            </NavDropdown>
        );
    } else {
        return null;
    }
}

export default SelectLedgerDropdown;
