package com.poppu.server.util;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.Optional;
import java.util.stream.Stream;

@Converter(autoApply = true)
public class StatusConverter implements AttributeConverter<Status, String> {
    @Override
    public String convertToDatabaseColumn(Status status) {
        return Optional.ofNullable(status).map(Status::getCode).orElse(null);
    }

    @Override
    public Status convertToEntityAttribute(String code) {
        return Status.decode(code);
    }
}