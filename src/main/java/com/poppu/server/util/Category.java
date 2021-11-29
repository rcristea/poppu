package com.poppu.server.util;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import java.util.stream.Stream;

public enum Category {
    ACTION("Action"), ADVENTURE("Adventure"), DRAMA("Drama"), COMEDY("Comedy"), ANIMATION("Animation"), HORROR("Horror"), ROMANCE("Romance");

    private String code;
    private Category(String code) {
        this.code = code;
    }

    @JsonCreator
    public static Category decode(String code) {
        return Stream.of(Category.values()).filter(category -> category.code.toLowerCase().equals(code.toLowerCase())).findFirst().orElse(null);
    }

    @JsonValue
    public String getCode() {
        return code;
    }
}
