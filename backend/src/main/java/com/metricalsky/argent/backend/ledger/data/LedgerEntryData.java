package com.metricalsky.argent.backend.ledger.data;

import java.math.BigDecimal;
import java.time.LocalDate;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.metricalsky.argent.backend.ledger.entity.LedgerEntry;

public record LedgerEntryData(
        Integer id,
        @NotNull LocalDate entryDate,
        @NotBlank String payee,
        @NotNull BigDecimal amount
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
