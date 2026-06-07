package com.EWMS.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.EWMS.Entity.Product;
import com.EWMS.Repository.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private BarcodeService barcodeService;

	public Product updateProduct(Long id, Product updated) {

		Product product = productRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Product not found"));

		product.setName(updated.getName());
		product.setSku(updated.getSku());
		product.setPrice(updated.getPrice());

		return productRepository.save(product);

	}

	// Save product

	public Product saveProduct(Product product) {

		Product savedProduct = productRepository.save(product);

		System.out.println("Product saved");
		System.out.println("SKU=" + savedProduct.getSku());

		try {
			barcodeService.generateBarcode(savedProduct.getSku());
			System.out.println("Barcode generation method executed");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return savedProduct;
	}

	// get all product
	public List<Product> getAllproducts() {
		return productRepository.findAll();
	}

	// get product by id

	public Product getProductById(Long id) {
		return productRepository.findById(id).orElse(null);
	}

	// delete

	public void deleteProduct(Long id) {
		productRepository.deleteById(id);
	}
}
