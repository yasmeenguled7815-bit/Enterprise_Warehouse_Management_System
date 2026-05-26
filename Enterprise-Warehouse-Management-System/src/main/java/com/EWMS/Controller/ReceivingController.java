package com.EWMS.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.EWMS.Entity.Receiving;
import com.EWMS.service.ReceivingService;

@RestController
@RequestMapping("/api/receive")
public class ReceivingController {

	@Autowired
	private ReceivingService receivingService;
	
	@PostMapping
	public Receiving receiveStock(@RequestParam Long productId,
			@RequestParam Integer quantity,
			@RequestParam Long binId,
			@RequestParam String supplierName) {
		
		return receivingService.receiveStock(productId,quantity,binId,supplierName);
	}
}
