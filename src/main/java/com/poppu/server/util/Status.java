package com.poppu.server.util;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import java.util.stream.Stream;

public enum Status {
    ACTIVE("Active"), INACTIVE("Inactive"), SUSPENDED("Suspended");

    private String code;
    private Status(String code) {
        this.code = code;
    }

    @JsonCreator
    public static Status decode(final String code) {
        return Stream.of(Status.values()).filter(status -> status.code.toLowerCase().equals(code.toLowerCase())).findFirst().orElse(null);
    }

    @JsonValue
    public String getCode() {
        return code;
    }
}
