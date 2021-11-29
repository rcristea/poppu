package com.poppu.server.util;

public enum TicketType {
    Child("Child"), Adult("Adult"), Senior("Senior");

    private String code;
    private TicketType(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }
}
