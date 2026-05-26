package com.EWMS.Entity;

import java.time.LocalDate;

import org.hibernate.annotations.ManyToAny;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Receiving {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String supplierName;
	private Integer quantityReceived;
	private LocalDate receivingDate;
	
	@ManyToOne
	private Product product;
	
	@ManyToOne
	private StorageBin storageBin;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSupplierName() {
		return supplierName;
	}

	public void setSupplierName(String suppplierName) {
		this.supplierName = suppplierName;
	}

	public Integer getQuantityReceived() {
		return getQuantityReceived();
	}

	public void setQuantityReceived(Integer quantityReceived) {
		this.quantityReceived = quantityReceived;
	}

	public LocalDate getReceivingDate() {
		return receivingDate;
	}

	public void setReceivingDate(LocalDate receivingDate) {
		this.receivingDate = receivingDate;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public StorageBin getStorageBin() {
		return storageBin;
	}

	public void setStorageBin(StorageBin storageBin) {
		this.storageBin = storageBin;
	}
	
	
	
	
	
	
}
