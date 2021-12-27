package com.metricalsky.argent.backend.accounts.entity;

import java.math.BigDecimal;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import com.metricalsky.argent.backend.common.entity.IdentifiableEntity;
import com.metricalsky.argent.backend.ledger.entity.Ledger;

import static org.apache.commons.collections4.CollectionUtils.emptyIfNull;

@Entity
@Table(name = "accounts")
@Getter
@Setter
@NoArgsConstructor
public class Account extends IdentifiableEntity {

    @NotNull
    private String name;

    @OneToMany
    @JoinColumn(name = "account_id")
    private List<Ledger> ledgers;

    public BigDecimal getBalance() {
        return emptyIfNull(ledgers)
                .stream()
                .map(Ledger::getBalance)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}
