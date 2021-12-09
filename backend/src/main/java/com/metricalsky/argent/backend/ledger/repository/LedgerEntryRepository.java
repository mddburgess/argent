package com.metricalsky.argent.backend.ledger.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.metricalsky.argent.backend.ledger.entity.LedgerEntry;

@Repository
@Transactional(readOnly = true)
public interface LedgerEntryRepository extends JpaRepository<LedgerEntry, Integer> {

    List<LedgerEntry> findByOrderByEntryDateDescIdDesc();
}
