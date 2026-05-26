package com.EWMS.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.EWMS.Entity.Product;
import com.EWMS.Repository.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
   private ProductRepository productRepository;
	
	//Save product 
	
	public Product saveProduct(Product product) {
		return productRepository.save(product);
	}
	
    //get all product
	public List<Product> getAllproducts(){
		return productRepository.findAll();
	}
	
	
	//get product by id
	
	public Product getProductById(Long id) {
		return productRepository.findById(id).orElse(null);
	}
	
	//delete
	
	public void deleteProduct(Long id) {
		productRepository.deleteById(id);
	}
}
