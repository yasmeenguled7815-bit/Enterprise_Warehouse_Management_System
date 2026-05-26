package com.EWMS.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.EWMS.Entity.InventoryItem;
import com.EWMS.Entity.Product;
import com.EWMS.Entity.StorageBin;

public interface InventoryItemRepository extends JpaRepository<InventoryItem, Long> {

	
   Optional<InventoryItem> findByProductAndStorageBin( Product product,StorageBin storageBin
	    );
	}


