package com.metricalsky.argent.backend.ledger.rest;

import java.util.List;
import javax.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.metricalsky.argent.backend.exceptions.NotFoundException;
import com.metricalsky.argent.backend.ledger.data.LedgerData;
import com.metricalsky.argent.backend.ledger.data.LedgerSummary;
import com.metricalsky.argent.backend.ledger.entity.Ledger;
import com.metricalsky.argent.backend.ledger.repository.LedgerRepository;

@RestController
@RequestMapping("/api/ledgers")
public class LedgerController {

    private final LedgerRepository ledgerRepository;

    public LedgerController(LedgerRepository ledgerRepository) {
        this.ledgerRepository = ledgerRepository;
    }

    @GetMapping
    public List<LedgerSummary> listLedgers() {
        return ledgerRepository.findAll()
                .stream()
                .map(LedgerSummary::new)
                .toList();
    }

    @PostMapping
    public LedgerSummary createLedger(@Valid @RequestBody LedgerSummary ledgerSummary) {
        var ledger = new Ledger(ledgerSummary);
        ledgerRepository.save(ledger);
        return new LedgerSummary(ledger);
    }

    @GetMapping("/{id}")
    public LedgerData retrieveLedger(@PathVariable Integer id) {
        return ledgerRepository.findDetailedById(id)
                .map(LedgerData::new)
                .orElseThrow(NotFoundException::new);
    }
}
