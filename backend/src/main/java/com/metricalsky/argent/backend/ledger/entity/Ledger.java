package com.metricalsky.argent.backend.ledger.entity;

import java.math.BigDecimal;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import com.metricalsky.argent.backend.common.entity.IdentifiableEntity;
import com.metricalsky.argent.backend.ledger.data.LedgerSummary;

import static org.apache.commons.collections4.CollectionUtils.emptyIfNull;

@Entity
@Table(name = "ledgers")
@Getter
@Setter
@NoArgsConstructor
public class Ledger extends IdentifiableEntity {

    @NotNull
    @Column(name = "account_id")
    private Integer accountId;

    @OneToMany
    @JoinColumn(name = "ledger_id")
    @OrderBy("entryDate DESC, id DESC")
    private List<LedgerEntry> entries;

    public Ledger(LedgerSummary ledgerSummary) {

    }

    public void patch(LedgerSummary other) {

    }

    public BigDecimal getBalance() {
        return emptyIfNull(entries)
                .stream()
                .map(LedgerEntry::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}
