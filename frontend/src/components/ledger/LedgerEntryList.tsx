import api from "api";
import ListGroup from "react-bootstrap/ListGroup";
import LedgerEntryListItem from "components/ledger/LedgerEntryListItem";
import AddLedgerEntryListItem from "components/ledger/AddLedgerEntryListItem";

const LedgerEntryList = () => {
    const {data} = api.useListLedgerQuery();
    return (
        <ListGroup variant="flush">
            <AddLedgerEntryListItem />
            {data?.map(item => <LedgerEntryListItem key={item.id} item={item} />)}
        </ListGroup>
    )
}

export default LedgerEntryList;
