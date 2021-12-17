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
            dispatch(ledgerActions.setSelected(data[0].id));
        }
    }, [data, selected]);

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
