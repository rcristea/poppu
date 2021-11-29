package com.poppu.server.util;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.stream.Stream;

@Converter(autoApply = true)
public class TicketTypeConverter implements AttributeConverter<TicketType, String> {
    @Override
    public String convertToDatabaseColumn(TicketType ticketType) {
        if (ticketType == null) {
            return null;
        }
        return ticketType.getCode();
    }

    @Override
    public TicketType convertToEntityAttribute(String code) {
        if (code == null) {
            return null;
        }

        return Stream.of(TicketType.values())
                .filter(c -> c.getCode().equals(code))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
    }
}
