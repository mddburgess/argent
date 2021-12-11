package com.metricalsky.argent.backend.ledger.entity;

import java.math.BigDecimal;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

import com.metricalsky.argent.backend.common.entity.IdentifiableEntity;

@Entity
@Table(name = "ledgers")
@Getter
@Setter
public class Ledger extends IdentifiableEntity {

    @NotNull
    private String name;

    @OneToMany
    @JoinColumn(name = "ledger_id")
    @OrderBy("entryDate DESC, id DESC")
    private List<LedgerEntry> entries;

    public BigDecimal getBalance() {
        return entries.stream()
                .map(LedgerEntry::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}
