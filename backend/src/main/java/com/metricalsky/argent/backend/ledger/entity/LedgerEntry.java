package com.metricalsky.argent.backend.ledger.entity;

import java.math.BigDecimal;
import java.time.ZonedDateTime;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import com.metricalsky.argent.backend.common.entity.IdentifiableEntity;
import com.metricalsky.argent.backend.ledger.data.LedgerEntryData;

@Entity
@Table(name = "ledger_entries")
@Getter
@Setter
@NoArgsConstructor
public class LedgerEntry extends IdentifiableEntity {

    private ZonedDateTime entryDate;
    private String payee;
    private BigDecimal amount;

    public LedgerEntry(LedgerEntryData data) {
        this.entryDate = data.entryDate();
        this.payee = data.payee();
        this.amount = data.amount();
    }

    public void patch(LedgerEntryData other) {
        this.entryDate = other.entryDate();
        this.payee = other.payee();
        this.amount = other.amount();
    }
}
