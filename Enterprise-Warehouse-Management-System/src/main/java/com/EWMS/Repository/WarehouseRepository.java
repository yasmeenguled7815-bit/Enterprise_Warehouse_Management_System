package com.EWMS.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.EWMS.Entity.Warehouse;

public interface WarehouseRepository extends JpaRepository<Warehouse, Long> {
	
	

}
