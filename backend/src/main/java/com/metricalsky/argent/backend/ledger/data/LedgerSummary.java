package com.metricalsky.argent.backend.ledger.data;

import java.math.BigDecimal;
import javax.validation.constraints.NotBlank;

import com.metricalsky.argent.backend.ledger.entity.Ledger;

public record LedgerSummary(
        Integer id,
        @NotBlank String name,
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
