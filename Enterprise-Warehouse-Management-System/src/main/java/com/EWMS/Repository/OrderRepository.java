package com.EWMS.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.EWMS.Entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
