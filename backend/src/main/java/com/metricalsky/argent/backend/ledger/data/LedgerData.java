package com.metricalsky.argent.backend.ledger.data;

import java.math.BigDecimal;
import java.util.List;

import com.metricalsky.argent.backend.ledger.entity.Ledger;

public record LedgerData(
        Integer id,
        BigDecimal balance,
        List<LedgerEntryData> entries
) {
    public LedgerData(Ledger ledger) {
        this(
                ledger.getId(),
                ledger.getBalance(),
                ledger.getEntries().stream().map(LedgerEntryData::new).toList()
        );
    }
}
