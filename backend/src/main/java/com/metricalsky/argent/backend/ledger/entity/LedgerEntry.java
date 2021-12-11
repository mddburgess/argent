package com.metricalsky.argent.backend.ledger.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.commons.lang3.StringUtils;

import com.metricalsky.argent.backend.common.entity.IdentifiableEntity;
import com.metricalsky.argent.backend.ledger.data.LedgerEntryData;

@Entity
@Table(name = "ledger_entries")
@Getter
@Setter
@NoArgsConstructor
public class LedgerEntry extends IdentifiableEntity {

    @NotNull
    @Column(name = "ledger_id")
    private Integer ledgerId;

    @NotNull
    private LocalDate entryDate;

    @NotNull
    private String payee;

    @NotNull
    private BigDecimal amount;

    public LedgerEntry(Integer ledgerId, LedgerEntryData data) {
        this.ledgerId = ledgerId;
        this.entryDate = data.entryDate();
        this.payee = StringUtils.trimToNull(data.payee());
        this.amount = data.amount();
    }

    public void patch(LedgerEntryData other) {
        this.entryDate = other.entryDate();
        this.payee = StringUtils.trimToNull(other.payee());
        this.amount = other.amount();
    }
}
