package com.poppu.server.util;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.Optional;
import java.util.stream.Stream;

@Converter(autoApply = true)
public class RoleConverter implements AttributeConverter<Role, String> {
    @Override
    public String convertToDatabaseColumn(Role role) {
        return Optional.ofNullable(role).map(Role::getCode).orElse(null);
    }

    @Override
    public Role convertToEntityAttribute(String code) {
        return Role.decode(code);
    }
}