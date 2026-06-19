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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.EWMS.Entity.Order;
import com.EWMS.Enum.OrderStatus;
import com.EWMS.service.OrderService;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	
	@PostMapping
	public Order createOrder(@RequestBody Order order) {
		return orderService.createOrder(order);
	}
	
	@PutMapping("/{id}")
	public Order updateOrderStatus(
	        @PathVariable Long id,
	        @RequestBody Order order) {

	    return orderService.updateStatus(id, order.getStatus());
	}
	
	@GetMapping
	public List<Order> getAllOrders() {
	    return orderService.getAllOrders();
	}
	
	@DeleteMapping("/{id}")
	public void deleteOrder(@PathVariable Long id) {
	    orderService.deleteOrder(id);
	}
	

}
