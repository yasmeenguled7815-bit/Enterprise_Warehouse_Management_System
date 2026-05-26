package com.EWMS.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EWMS.Entity.InventoryItem;
import com.EWMS.Repository.InventoryItemRepository;

@RestController
@RequestMapping("/api/inventory")
public class InventoryItemController {
	
	@Autowired
	private InventoryItemRepository inventoryItemRepository;
	
	//Create
	@PostMapping
	public InventoryItem create(@RequestBody InventoryItem inventoryitem) {
		return inventoryItemRepository.save(inventoryitem);
	}
	
	//Get All
	@GetMapping
	public List<InventoryItem> getAll(){
		return inventoryItemRepository.findAll();
	}
	
	//Get All  by id
	@GetMapping("/{id}")
	public InventoryItem getBId(@PathVariable Long id) {
		return inventoryItemRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Inventory Items not fount bty id: " +id));
	}
	
	//Update
	@PutMapping("/{id}")
	public InventoryItem update(@PathVariable Long id,
			                      @RequestBody InventoryItem updated) {
		InventoryItem inventoryitem=inventoryItemRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Inventory items not found by id:" +id));
	
		inventoryitem.setQuantity(updated.getQuantity());
		
		return inventoryItemRepository.save(inventoryitem);
	}
	
	//Delete

		@DeleteMapping("/{id}")
	    public void delete(@PathVariable Long id) {
	        inventoryItemRepository.deleteById(id);
	}
	
	

}
