package com.EWMS.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EWMS.Entity.InventoryItem;
import com.EWMS.Repository.InventoryItemRepository;
import com.EWMS.Repository.OrderRepository;
import com.EWMS.Repository.ProductRepository;
import com.EWMS.Repository.WarehouseRepository;

@RestController
	@RequestMapping("/api/dashboard")
	public class DashboardController {

	    @Autowired
	    private ProductRepository productRepository;

	    @Autowired
	    private InventoryItemRepository inventoryRepository;

	    @Autowired
	    private OrderRepository orderRepository;

	    @Autowired
	    private WarehouseRepository warehouseRepository;

	    @GetMapping
	    public Map<String, Long> getDashboardStats() {

	        Map<String, Long> stats = new HashMap<>();

	        stats.put("products", productRepository.count());
	        stats.put("inventory", (long) inventoryRepository.findAll()
	                .stream()
	                .mapToInt(InventoryItem::getQuantity)
	                .sum());

	        stats.put("orders", orderRepository.count());
	        stats.put("warehouses", warehouseRepository.count());

	        return stats;
	    }
	}

