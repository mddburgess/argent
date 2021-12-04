import api from "api";
import ListGroup from "react-bootstrap/ListGroup";
import LedgerEntryRow from "components/ledger/LedgerEntryRow";
import AddLedgerEntryRow from "components/ledger/AddLedgerEntryRow";

const LedgerEntryList = () => {
    const {data} = api.useListLedgerQuery();
    return (
        <ListGroup variant="flush">
            <AddLedgerEntryRow />
            {data?.map(item => <LedgerEntryRow key={item.id} item={item} />)}
        </ListGroup>
    )
}

export default LedgerEntryList;
