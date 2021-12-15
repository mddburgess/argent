import api from "api";
import Navbar from "react-bootstrap/Navbar";

const CurrentBalance = () => {
    const {data} = api.useRetrieveLedgerQuery(1);
    const format = Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD",
        currencySign: "accounting"
    });

    if (data) {
        return (
            <>
                <Navbar.Text>Current Balance</Navbar.Text>
                <Navbar.Brand className={`ms-2 me-0 ${data.balance < 0 && "text-danger"}`}>
                    {format.format(data.balance)}
                </Navbar.Brand>
            </>
        );
    } else {
        return <></>;
    }
}

export default CurrentBalance;
