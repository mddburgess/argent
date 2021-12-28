import LedgerEntry from "types/LedgerEntry";

interface Ledger {
    id: number,
    name: string,
    balance: number,
    entries?: LedgerEntry[]
}

export default Ledger;
