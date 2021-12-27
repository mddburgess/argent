package com.metricalsky.argent.backend.accounts.data;

import java.math.BigDecimal;
import java.util.List;

import com.metricalsky.argent.backend.accounts.entity.Account;
import com.metricalsky.argent.backend.ledger.data.LedgerSummary;

public record AccountData(
        Integer id,
        String name,
        BigDecimal balance,
        List<LedgerSummary> ledgers
) {
    public AccountData(Account account) {
        this(
                account.getId(),
                account.getName(),
                account.getBalance(),
                account.getLedgers().stream().map(LedgerSummary::new).toList()
        );
    }
}
