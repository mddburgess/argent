import api from "api";
import ListGroup from "react-bootstrap/ListGroup";
import LedgerEntryRow from "components/ledger/LedgerEntryRow";
import AddLedgerEntryRow from "components/ledger/AddLedgerEntryRow";
import LedgerEntryHeaderRow from "components/ledger/LedgerEntryHeaderRow";

const LedgerEntryList = () => {
    const {data} = api.useRetrieveLedgerQuery(1);
    const format = new Intl.NumberFormat("en-CA", {style: "currency", currency: "CAD"});

    return (
        <ListGroup variant="flush">
            <LedgerEntryHeaderRow/>
            <AddLedgerEntryRow/>
            {data?.entries?.map(item => <LedgerEntryRow key={item.id} item={item} format={format}/>)}
        </ListGroup>
    )
}

export default LedgerEntryList;
