import ListGroup from "react-bootstrap/ListGroup";
import LedgerEntryRow from "components/ledger/LedgerEntryRow";
import AddLedgerEntryRow from "components/ledger/AddLedgerEntryRow";
import LedgerEntryHeaderRow from "components/ledger/LedgerEntryHeaderRow";
import {useListLedgersQuery} from "api/ledgers";
import {useAppSelector} from "store/hooks";

const LedgerEntryList = () => {
    const selected = useAppSelector(state => state.ledger.selected);
    const {ledger} = useListLedgersQuery(undefined, {
        selectFromResult: ({data}) => ({
            ledger: data?.find((item) => item.id === selected)
        })
    });
    const format = new Intl.NumberFormat("en-CA", {style: "currency", currency: "CAD"});

    return (
        <ListGroup variant="flush">
            <LedgerEntryHeaderRow/>
            <AddLedgerEntryRow/>
            {ledger?.entries?.map(item => <LedgerEntryRow key={item.id} item={item} format={format}/>)}
        </ListGroup>
    )
}

export default LedgerEntryList;
