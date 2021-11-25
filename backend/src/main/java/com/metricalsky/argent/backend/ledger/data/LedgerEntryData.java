package com.metricalsky.argent.backend.ledger.data;

import java.math.BigDecimal;
import java.time.ZonedDateTime;

import com.metricalsky.argent.backend.ledger.entity.LedgerEntry;

public record LedgerEntryData(
        Integer id,
        ZonedDateTime entryDate,
        String payee,
        BigDecimal amount
) {
    public LedgerEntryData(LedgerEntry entity) {
        this(
                entity.getId(),
                entity.getEntryDate(),
                entity.getPayee(),
                entity.getAmount()
        );
    }
}