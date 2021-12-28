import Ledger from "types/Ledger";

interface Account {
    id: number;
    name: string;
    balance: number;
    ledgers?: Ledger[];
}

export default Account;
