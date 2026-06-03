package com.EWMS.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.EWMS.Entity.InventoryItem;
import com.EWMS.Entity.Order;
import com.EWMS.Enum.OrderStatus;
import com.EWMS.Repository.InventoryItemRepository;
import com.EWMS.Repository.OrderRepository;
import com.EWMS.exception.InsufficientStockException;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired
	private InventoryItemRepository inventoryItemRepository;
	
	
	}
	
	
