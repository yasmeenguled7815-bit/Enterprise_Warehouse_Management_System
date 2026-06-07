package com.EWMS.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EWMS.Entity.Product;
import com.EWMS.Repository.ProductRepository;
import com.EWMS.service.ProductService;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping
    public Product create(@RequestBody Product product) throws Exception {
        return productService.saveProduct(product);
    }

//    @GetMapping
//    public List<Product> getAll() {
//        return productService.getAllproducts();
//    }

    @GetMapping("/{id}")
    public Product getById(@PathVariable Long id) {
        return productService.getProductById(id);
    }
    
    @PutMapping("/{id}")
    public Product update(@PathVariable Long id,
                          @RequestBody Product updated) {
        return productService.updateProduct(id, updated);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        productService.deleteProduct(id);
    }
    
    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public List<Product> getAllProducts(){
    	return productService.getAllproducts();
    }
}
