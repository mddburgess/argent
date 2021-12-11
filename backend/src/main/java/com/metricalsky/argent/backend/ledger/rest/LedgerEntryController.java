package com.metricalsky.argent.backend.ledger.rest;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.metricalsky.argent.backend.exceptions.NotFoundException;
import com.metricalsky.argent.backend.ledger.data.LedgerEntryData;
import com.metricalsky.argent.backend.ledger.entity.LedgerEntry;
import com.metricalsky.argent.backend.ledger.repository.LedgerEntryRepository;

@RestController
@RequestMapping("/api/ledgers/{ledgerId}/entries")
public class LedgerEntryController {

    private final LedgerEntryRepository ledgerEntryRepository;

    public LedgerEntryController(LedgerEntryRepository ledgerEntryRepository) {
        this.ledgerEntryRepository = ledgerEntryRepository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @Transactional
    public LedgerEntryData createLedgerEntry(
            @PathVariable Integer ledgerId,
            @Valid @RequestBody LedgerEntryData ledgerEntryData
    ) {
        var ledgerEntry = new LedgerEntry(ledgerId, ledgerEntryData);
        ledgerEntryRepository.save(ledgerEntry);
        return new LedgerEntryData(ledgerEntry);
    }

    @PutMapping("/{entryId}")
    @Transactional
    public LedgerEntryData updateLedgerEntry(
            @PathVariable Integer ledgerId,
            @PathVariable Integer entryId,
            @Valid @RequestBody LedgerEntryData ledgerEntryData
    ) {
        var ledgerEntry = ledgerEntryRepository.findByIdAndLedgerId(entryId, ledgerId)
                .orElseThrow(NotFoundException::new);
        ledgerEntry.patch(ledgerEntryData);
        return new LedgerEntryData(ledgerEntry);
    }

    @DeleteMapping("/{entryId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @Transactional
    public void deleteLedgerEntry(
            @PathVariable Integer ledgerId,
            @PathVariable Integer entryId
    ) {
        ledgerEntryRepository.deleteByIdAndLedgerId(entryId, ledgerId);
    }
}
