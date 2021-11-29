package com.poppu.server.util;

public enum Category {
    ACTION("Action"), ADVENTURE("Adventure"), DRAMA("Drama"), COMEDY("Comedy"), ANIMATION("Animation"), HORROR("Horror"), ROMANCE("Romance");

    private String code;
    private Category(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }
}
