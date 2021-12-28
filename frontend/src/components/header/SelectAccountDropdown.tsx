import {NavDropdown} from "react-bootstrap";
import SelectAccountDropdownItem from "components/header/SelectAccountDropdownItem";
import {useAppDispatch, useAppSelector} from "store/hooks";
import {useEffect} from "react";
import {useListAccountsQuery} from "api/accounts";
import {accountActions} from "store/account";

const SelectAccountDropdown = () => {
    const {data} = useListAccountsQuery();
    const selected = useAppSelector(state => state.account.selected);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (data && !selected) {
            dispatch(accountActions.select(data[0].id));
        }
    }, [data, selected, dispatch]);

    const doClickNew = () => undefined;

    if (data) {
        const selectedName = data.find(item => item.id === selected)?.name ?? "Accounts";

        return (
            <NavDropdown title={`${selectedName} `} className="me-2">
                {data.map(item => <SelectAccountDropdownItem key={item.id} item={item}/>)}
                <NavDropdown.Divider/>
                <NavDropdown.Item onClick={doClickNew}>New account...</NavDropdown.Item>
            </NavDropdown>
        );
    } else {
        return null;
    }
}

export default SelectAccountDropdown;
