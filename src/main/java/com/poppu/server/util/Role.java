package com.poppu.server.util;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import java.util.stream.Stream;

public enum Role {
    ADMIN("Admin"), USER("User"), DEFAULT("Default");

    private String code;
    private Role(String code) {
        this.code = code;
    }

    @JsonCreator
    public static Role decode(final String code) {
        return Stream.of(Role.values()).filter(role -> role.code.toLowerCase().equals(code.toLowerCase())).findFirst().orElse(null);
    }

    @JsonValue
    public String getCode() {
        return code;
    }
}
