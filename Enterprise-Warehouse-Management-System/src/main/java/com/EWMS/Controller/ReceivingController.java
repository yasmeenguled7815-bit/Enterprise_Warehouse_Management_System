package com.EWMS.Controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.EWMS.Entity.Receiving;
import com.EWMS.Repository.ReceivingRepository;
import com.EWMS.service.ReceivingService;

@RestController
@RequestMapping("/api/receiving")
public class ReceivingController {

	@Autowired
	private ReceivingService receivingService;

	@Autowired
	private ReceivingRepository receivingRepository;

	@PostMapping
	public Receiving receiveStock(@RequestParam Long productId, @RequestParam Integer quantity,
			@RequestParam Long binId, @RequestParam String supplierName) {

		return receivingService.receiveStock(productId, quantity, binId, supplierName);
	}

	@GetMapping
	public List<Receiving> getAllReceivings() {
		return receivingService.getAllReceivings();
	}

	@DeleteMapping("/{id}")
	public void deleteReceiving(@PathVariable Long id) {
		receivingRepository.deleteById(id);
	}
}
