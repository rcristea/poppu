package com.poppu.server.repository;

import com.poppu.server.model.MovieModel;
import com.poppu.server.model.ReviewModel;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "inlineReviewModel", types = {ReviewModel.class })
public interface InlineReviewModel {
    long getReviewId();
    String getTitle();
    double getRating();
    String getDescription();
    MovieModel getMovie();
}
