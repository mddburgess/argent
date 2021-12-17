import Navbar from "react-bootstrap/Navbar";
import {useListLedgersQuery} from "api/ledgers";
import {useAppSelector} from "store/hooks";

const CurrentBalance = () => {
    const selected = useAppSelector(state => state.ledger.selected);
    const {ledger} = useListLedgersQuery(undefined, {
        selectFromResult: ({data}) => ({
            ledger: data?.find((item) => item.id === selected)
        })
    });
    const format = Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD",
        currencySign: "accounting"
    });

    if (ledger) {
        return (
            <>
                <Navbar.Text>Current Balance</Navbar.Text>
                <Navbar.Brand className={`ms-2 me-0 ${ledger.balance < 0 && "text-danger"}`}>
                    {format.format(ledger.balance)}
                </Navbar.Brand>
            </>
        );
    } else {
        return <></>;
    }
}

export default CurrentBalance;
