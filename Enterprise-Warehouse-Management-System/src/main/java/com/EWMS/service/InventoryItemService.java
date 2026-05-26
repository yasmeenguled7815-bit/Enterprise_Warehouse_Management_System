package com.EWMS.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.EWMS.Entity.InventoryItem;
import com.EWMS.Repository.InventoryItemRepository;

@Service
public class InventoryItemService {
	
	@Autowired
	public InventoryItemRepository inventoryItemRepository;
	
	//save
	
	public InventoryItem saveInventoryItem(InventoryItem inventoryItem) {
		return inventoryItemRepository.save(inventoryItem);
	}
	
	//get all
	
	public List<InventoryItem> getAllInventoryItem(){
		return inventoryItemRepository.findAll();
	}
	
	//get by id
	
	public  InventoryItem getById(Long id) {
		return inventoryItemRepository.findById(id).orElse(null);
	}
	
	//delete
	
	public void deleteInventoryItem(Long id) {
		inventoryItemRepository.deleteById(id);
	}
	
	//update stock
	public InventoryItem  updateStock(Long id, Integer quantity) {
		
		InventoryItem item=inventoryItemRepository.findById(id).orElse(null);
		
		
		if(item!=null) {
			item.setQuantity(quantity);
			return inventoryItemRepository.save(item);
		}
		
		return null;
	}
	

}
