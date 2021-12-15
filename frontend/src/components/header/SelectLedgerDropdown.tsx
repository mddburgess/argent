import api from "api";
import {NavDropdown} from "react-bootstrap";
import SelectLedgerDropdownItem from "components/header/SelectLedgerDropdownItem";
import {useAppDispatch, useAppSelector} from "store/hooks";
import {useEffect} from "react";
import {ledgerActions} from "store/ledger";

const SelectLedgerDropdown = () => {
    const {data} = api.useListLedgersQuery();
    const selected = useAppSelector(state => state.ledger.selected);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (data) {
            dispatch(ledgerActions.setSelected(data[0].id));
        }
    });

    if (data) {
        const selectedName = data.filter(item => item.id === selected)
            .map(item => item.name)[0] ?? "Ledgers";

        return (
            <NavDropdown title={`${selectedName} `}>
                {data.map(item => <SelectLedgerDropdownItem key={item.id} item={item}/>)}
                <NavDropdown.Divider/>
                <NavDropdown.Item>New ledger...</NavDropdown.Item>
            </NavDropdown>
        );
    } else {
        return <></>;
    }
}

export default SelectLedgerDropdown;
