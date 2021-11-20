package com.metricalsky.argent.backend.ledger.rest;

import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.metricalsky.argent.backend.ledger.data.LedgerEntryData;
import com.metricalsky.argent.backend.ledger.entity.LedgerEntry;
import com.metricalsky.argent.backend.ledger.repository.LedgerEntryRepository;

@RestController
@RequestMapping("/api/ledger")
public class LedgerController {

    private final LedgerEntryRepository ledgerEntryRepository;

    public LedgerController(LedgerEntryRepository ledgerEntryRepository) {
        this.ledgerEntryRepository = ledgerEntryRepository;
    }

    @GetMapping
    public Iterable<LedgerEntryData> retrieveLedger() {
        return ledgerEntryRepository.findAll()
                .stream()
                .map(LedgerEntryData::new)
                .toList();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @Transactional
    public LedgerEntryData createLedgerEntry(@RequestBody LedgerEntryData ledgerEntryData) {
        var ledgerEntry = new LedgerEntry(ledgerEntryData);
        ledgerEntryRepository.save(ledgerEntry);
        return new LedgerEntryData(ledgerEntry);
    }

    @PutMapping("/{id}")
    @Transactional
    public LedgerEntryData updateLedgerEntry(
            @PathVariable Integer id,
            @RequestBody LedgerEntryData ledgerEntryData
    ) {
        var ledgerEntry = ledgerEntryRepository.findById(id).orElseThrow();
        ledgerEntry.patch(ledgerEntryData);
        return new LedgerEntryData(ledgerEntry);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @Transactional
    public void deleteLedgerEntry(@PathVariable Integer id) {
        ledgerEntryRepository.deleteById(id);
    }
}
