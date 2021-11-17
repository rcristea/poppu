package com.poppu.server.controller;

import com.poppu.server.model.ActorModel;
import com.poppu.server.repository.ActorRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/actors")
public class ActorController {
    private final Logger log = LoggerFactory.getLogger(ShowController.class);
    private ActorRepository actorRepository;

    public ActorController(ActorRepository actorRepository) {
        this.actorRepository = actorRepository;
    }

    @GetMapping("/")
    public List<ActorModel> getActors() {
        return this.actorRepository.findAll();
    }

    @PutMapping("/{id}")
    public ResponseEntity<ActorModel> putActor(@RequestBody ActorModel newActorInfo, @PathVariable("id") long id) throws URISyntaxException {
        ActorModel updatedActor = this.actorRepository.findById(id)
                .map(actor -> {
                    actor.setFirstName(newActorInfo.getFirstName());
                    actor.setLastName(newActorInfo.getLastName());
                    return this.actorRepository.save(actor);
                })
                .orElseGet(() -> this.actorRepository.save(newActorInfo));
        return ResponseEntity
                .created(new URI("/api/actor/" + updatedActor.getActorId()))
                .body(updatedActor);
    }

    @PostMapping("/")
    public ResponseEntity<ActorModel> createActor(@RequestBody ActorModel actor) throws URISyntaxException {
        ActorModel res = this.actorRepository.save(actor);
        return ResponseEntity
                .created(new URI("/api/actors/" + res.getActorId()))
                .body(res);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteActor(@PathVariable("id") long id) {
        this.actorRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
