package com.metricalsky.argent.backend.accounts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.metricalsky.argent.backend.accounts.entity.Account;

public interface AccountRepository extends JpaRepository<Account, Integer> {

}
