package com.metricalsky.argent.backend.ledger.data;

import java.math.BigDecimal;

import com.metricalsky.argent.backend.ledger.entity.Ledger;

public record LedgerSummary(
        Integer id,
        String name,
        BigDecimal balance
) {
    public LedgerSummary(Ledger ledger) {
        this(
                ledger.getId(),
                ledger.getName(),
                ledger.getBalance()
        );
    }
}
