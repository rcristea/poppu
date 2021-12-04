package com.poppu.server.util;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import java.util.stream.Stream;

public enum TicketType {
    Child("Child"), Adult("Adult"), Senior("Senior");

    private String code;
    private TicketType(String code) {
        this.code = code;
    }

    @JsonCreator
    public static TicketType decode(String code) {
        return Stream.of(TicketType.values()).filter(ticketType -> ticketType.code.toLowerCase().equals(code.toLowerCase())).findFirst().orElse(null);
    }

    @JsonValue
    public String getCode() {
        return code;
    }
}
