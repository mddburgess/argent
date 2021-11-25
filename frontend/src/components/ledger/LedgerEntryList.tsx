import api from "api";
import ListGroup from "react-bootstrap/ListGroup";
import LedgerEntryListItem from "components/ledger/LedgerEntryListItem";

const LedgerEntryList = () => {
    const {data} = api.useListLedgerQuery();
    return (
        <ListGroup variant="flush">
            {data?.map(item => <LedgerEntryListItem key={item.id} item={item} />)}
        </ListGroup>
    )
}

export default LedgerEntryList;
