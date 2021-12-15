import {LedgerEntry} from "types/LedgerEntry";

export interface Ledger {
    id: number,
    name: string,
    balance: number,
    entries?: LedgerEntry[]
}
