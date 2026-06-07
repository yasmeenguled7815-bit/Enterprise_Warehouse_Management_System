package com.EWMS.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EWMS.Entity.Warehouse;
import com.EWMS.Repository.WarehouseRepository;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api/warehouses")
public class WarehouseController {

	@Autowired
	private WarehouseRepository warehouseRepository;

	// Create
	@PostMapping
	public Warehouse create(@RequestBody Warehouse warehouse) {
		// TODO: process POST request
		return warehouseRepository.save(warehouse);
	}

	// Get All
	@GetMapping
	public List<Warehouse> getAll() {
		return warehouseRepository.findAll();
	}

	// Get By Id
	@GetMapping("/{id}")
	public Warehouse getById(@PathVariable Long id) {
		return warehouseRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Warehouse not found with id: " + id));
	}

	// Update
	@PutMapping("/{id}")
	public Warehouse update(@PathVariable Long id, @RequestBody Warehouse update) {
		Warehouse warehouse = warehouseRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Warehouse not found with id:" + id));

		warehouse.setCode(update.getCode());
		warehouse.setName(update.getName());
		warehouse.setLocation(update.getLocation());
		warehouse.setCity(update.getCity());
		warehouse.setCountry(update.getCountry());

		return warehouseRepository.save(warehouse);
	}

    //Delete
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {

		warehouseRepository.deleteById(id);
	}

}
