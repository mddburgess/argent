import LedgerEntryRow from "components/ledger/LedgerEntryRow";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "store";

describe("LedgerEntryRow", () => {
    it("renders", () => {
        const item = {
            id: 1,
            entryDate: "2021-01-01",
            payee: "Payee",
            amount: 100
        }
        const format = new Intl.NumberFormat("en-CA", {style: "currency", currency: "CAD"});

        const result = render(
            <Provider store={store}>
                <LedgerEntryRow item={item} format={format}/>
            </Provider>
        );
        expect(result.getByText("2021-01-01")).toBeInTheDocument();
        expect(result.getByText("Payee")).toBeInTheDocument();
        expect(result.getByText("$100.00")).toBeInTheDocument();
    });
})
