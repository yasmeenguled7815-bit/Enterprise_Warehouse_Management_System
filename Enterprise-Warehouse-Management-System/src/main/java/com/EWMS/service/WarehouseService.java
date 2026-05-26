package com.EWMS.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.EWMS.Entity.Warehouse;
import com.EWMS.Repository.WarehouseRepository;

@Service
public class WarehouseService {
	
	@Autowired
	private WarehouseRepository warehouseRepository;
	
	//save
	
	public Warehouse saveWarehouse(Warehouse warehouse) {
		return warehouseRepository.save(warehouse);
	}
	
	//get all
	
	public List<Warehouse> getAllWarehouse(){
		return warehouseRepository.findAll();
	}
	
	//get by id
	
	public Warehouse getById(Long id) {
		return warehouseRepository.findById(id).orElse(null);
	}
	
	//delete

	
	public void deleteWarehouse(Long id) {
		warehouseRepository.deleteById(id);
	}
}
