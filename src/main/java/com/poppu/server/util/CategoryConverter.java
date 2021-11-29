package com.poppu.server.util;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.Optional;
import java.util.stream.Stream;

@Converter(autoApply = true)
public class CategoryConverter implements AttributeConverter<Category, String> {
    @Override
    public String convertToDatabaseColumn(Category category) {
        return Optional.ofNullable(category).map(Category::getCode).orElse(null);
    }

    @Override
    public Category convertToEntityAttribute(String code) {
        return Category.decode(code);
    }
}
