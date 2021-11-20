package com.metricalsky.argent.backend.common.entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Version;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.data.domain.Persistable;

@MappedSuperclass
@Data
public abstract class IdentifiableEntity implements Persistable<Integer> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Version
    @EqualsAndHashCode.Exclude
    private Integer version;

    @Override
    public boolean isNew() {
        return getId() == null;
    }
}
