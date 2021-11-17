package com.poppu.server;

import com.poppu.server.model.*;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Component
public class RestConfiguration implements RepositoryRestConfigurer {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        config.exposeIdsFor(ShowroomModel.class);
        config.exposeIdsFor(MovieModel.class);
        config.exposeIdsFor(ShowModel.class);
        config.exposeIdsFor(SeatModel.class);
        config.exposeIdsFor(PromotionModel.class);
        config.exposeIdsFor(ActorModel.class);
        config.exposeIdsFor(MovieActorModel.class);
    }
}
