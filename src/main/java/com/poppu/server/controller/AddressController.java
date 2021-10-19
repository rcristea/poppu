package com.poppu.server.controller;

import com.poppu.server.model.AddressModel;
import com.poppu.server.repository.AddressRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/address")
public class AddressController {
    private final Logger log = LoggerFactory.getLogger(AddressController.class);
    private AddressRepository addressRepository;

    public AddressController(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    @GetMapping("/{id}")
    public ResponseEntity<AddressModel> getAddressById(@PathVariable("id") long id) {
        Optional<AddressModel> getAddressTest = this.addressRepository.findById(id);
        return getAddressTest.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<AddressModel> getAddressByUserId(@PathVariable("id") long userId) {
        Optional<AddressModel> getAddressTest = this.addressRepository.findAll().stream().filter(addressModel ->
            addressModel.getUser().getId() == userId
        ).findAny();
        return getAddressTest.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<AddressModel> putAddress(@RequestBody AddressModel newAddressInfo, @PathVariable("id") long id) throws URISyntaxException {
        AddressModel updatedAddress = this.addressRepository.findById(id)
                .map(address -> {
                    address.setCity(newAddressInfo.getCity());
                    address.setStreet(newAddressInfo.getStreet());
                    address.setZipCode(newAddressInfo.getZipCode());
                    return this.addressRepository.save(address);
                })
                .orElseGet(() -> this.addressRepository.save(newAddressInfo));
        return ResponseEntity
                .created(new URI("/api/address/" + updatedAddress.getAddressId()))
                .body(updatedAddress);
    }

    @PostMapping("/")
    public ResponseEntity<AddressModel> createAddress(@RequestBody AddressModel address) throws URISyntaxException {
        AddressModel res = this.addressRepository.save(address);
        return ResponseEntity
                .created(new URI("/api/address/" + res.getAddressId()))
                .body(res);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteAddress(@PathVariable("id") long id) {
        this.addressRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
