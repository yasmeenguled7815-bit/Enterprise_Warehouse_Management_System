package com.EWMS.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.EWMS.Entity.InventoryItem;
import com.EWMS.Entity.Product;
import com.EWMS.Entity.Receiving;
import com.EWMS.Entity.StorageBin;
import com.EWMS.Repository.InventoryItemRepository;
import com.EWMS.Repository.ProductRepository;
import com.EWMS.Repository.ReceivingRepository;
import com.EWMS.Repository.StorageBinRepository;

import jakarta.transaction.Transactional;

@Service
public class ReceivingService {
      
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private StorageBinRepository storageBinRepository;
	
	@Autowired
	private InventoryItemRepository inventoryItemRepository;
	
	@Autowired
	private ReceivingRepository receivingRepository;
	
	@Transactional
	public Receiving receiveStock(Long productId,Integer quantity,Long binId,String supplierName) {

	    // Find Product
		
	    Product product = productRepository.findById(productId)
	            .orElseThrow(() -> new RuntimeException("Product not found"));

	    // Find Storage Bin
	    
	    StorageBin storageBin = storageBinRepository.findById(binId)
	            .orElseThrow(() -> new RuntimeException("Storage bin not found"));

	    // Check if inventory already exists
	    
	    InventoryItem inventory = inventoryItemRepository
	            .findByProductAndStorageBin(product, storageBin).orElse(null);

	    // If inventory does not exist create new
	    
	    if (inventory == null) {

	        inventory = new InventoryItem();

	        inventory.setProduct(product);
	        inventory.setStorageBin(storageBin);
	        inventory.setQuantity(quantity);

	    }

	    // If inventory exists update quantity
	    
	    else {

	        inventory.setQuantity(
	                inventory.getQuantity() + quantity
	        );
	    }

	    // Save inventory
	    inventoryItemRepository.save(inventory);

	    // Save receiving transaction
	    Receiving receiving = new Receiving();

	    receiving.setProduct(product);
	    receiving.setStorageBin(storageBin);
	    receiving.setQuantityReceived(quantity);
	    receiving.setSupplierName(supplierName);
	    receiving.setReceivingDate(LocalDate.now());

	    return receivingRepository.save(receiving);
	}

	public List<Receiving> getAllReceivings() {
		 return receivingRepository.findAll();
	}
}
