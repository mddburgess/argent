package com.metricalsky.argent.backend.ledger.repository;

import java.util.List;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.metricalsky.argent.backend.ledger.entity.Ledger;

@Repository
@Transactional(readOnly = true)
public interface LedgerRepository extends JpaRepository<Ledger, Integer> {

    @Override
    @EntityGraph(attributePaths = "entries")
    List<Ledger> findAll();
}
