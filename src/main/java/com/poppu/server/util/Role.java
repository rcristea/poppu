package com.poppu.server.util;

public enum Role {
    ADMIN("Admin"), USER("User");

    private String code;
    private Role(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }
}
