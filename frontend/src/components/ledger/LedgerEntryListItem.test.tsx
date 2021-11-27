import LedgerEntryListItem from "components/ledger/LedgerEntryListItem";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "store";

describe("LedgerEntryListItem", () => {
    it("renders", () => {
        const item = {
            id: 1,
            entryDate: "2021-01-01",
            payee: "Payee",
            amount: 100
        }

        const result = render(<Provider store={store}><LedgerEntryListItem item={item}/></Provider>);
        expect(result.getByText("2021-01-01")).toBeInTheDocument();
        expect(result.getByText("Payee")).toBeInTheDocument();
        expect(result.getByText("100")).toBeInTheDocument();
    });
})
