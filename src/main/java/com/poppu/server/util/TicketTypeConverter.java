package com.poppu.server.util;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.Optional;
import java.util.stream.Stream;

@Converter(autoApply = true)
public class TicketTypeConverter implements AttributeConverter<TicketType, String> {
    @Override
    public String convertToDatabaseColumn(TicketType ticketType) {
        return Optional.ofNullable(ticketType).map(TicketType::getCode).orElse(null);
    }

    @Override
    public TicketType convertToEntityAttribute(String code) {
        return TicketType.decode(code);
    }
}
