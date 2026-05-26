package com.EWMS.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.EWMS.Entity.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {

}
