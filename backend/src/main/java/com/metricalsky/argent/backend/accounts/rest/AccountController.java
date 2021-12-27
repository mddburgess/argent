package com.metricalsky.argent.backend.accounts.rest;

import java.util.List;

import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.metricalsky.argent.backend.accounts.data.AccountData;
import com.metricalsky.argent.backend.accounts.repository.AccountRepository;

@RestController
@RequestMapping("/api/accounts")
@RequiredArgsConstructor
public class AccountController {

    private final AccountRepository accountRepository;

    @GetMapping
    @Transactional(readOnly = true)
    public List<AccountData> listAccounts() {
        return accountRepository.findAll()
                .stream()
                .map(AccountData::new)
                .toList();
    }
}
