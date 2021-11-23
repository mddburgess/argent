package com.metricalsky.argent.backend.filter;

import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import lombok.extern.slf4j.Slf4j;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE + 1)
@Slf4j
public class RequestLogFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
            FilterChain filterChain) throws ServletException, IOException {
        var shouldLog = request.getRequestURI().startsWith("/api");

        try {
            if (shouldLog) {
                log.info("{} {}", request.getMethod(), request.getRequestURI());
            }
            filterChain.doFilter(request, response);
        } finally {
            if (shouldLog) {
                var status = HttpStatus.resolve(response.getStatus());
                log.info("{} {} => {} {}", request.getMethod(), request.getRequestURI(),
                        status.value(), status.getReasonPhrase());
            }
        }
    }
}
