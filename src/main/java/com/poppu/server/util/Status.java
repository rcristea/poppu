package com.poppu.server.util;

public enum Status {
    ACTIVE("Active"), INACTIVE("Inactive"), SUSPENDED("Suspended");

    private String code;
    private Status(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }
}
