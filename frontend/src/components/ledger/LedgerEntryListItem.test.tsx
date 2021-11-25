import LedgerEntryListItem from "components/ledger/LedgerEntryListItem";
import {render} from "@testing-library/react";

describe("LedgerEntryListItem", () => {
    it("renders", () => {
        const item = {
            id: 1,
            entryDate: "2021-01-01",
            payee: "Payee",
            amount: 100
        }

        const result = render(<LedgerEntryListItem item={item}/>);
        expect(result.getByText("2021-01-01")).toBeInTheDocument();
        expect(result.getByText("Payee")).toBeInTheDocument();
        expect(result.getByText("100")).toBeInTheDocument();
    });
})
