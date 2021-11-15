package com.poppu.server.repository;

import com.poppu.server.model.ShowModel;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "inlineMovie", types = { ShowModel.class })
public interface InlineMovie {
}
