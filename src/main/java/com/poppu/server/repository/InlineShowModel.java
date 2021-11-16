package com.poppu.server.repository;

import com.poppu.server.model.MovieModel;
import com.poppu.server.model.ShowModel;
import com.poppu.server.model.ShowroomModel;
import org.springframework.data.rest.core.config.Projection;
import java.util.Date;

@Projection(name = "inlineShowModel", types = { ShowModel.class })
public interface InlineShowModel {
    long getShowID();
    Date getDateTime();
    MovieModel getMovie();
    ShowroomModel getShowroom();
}
