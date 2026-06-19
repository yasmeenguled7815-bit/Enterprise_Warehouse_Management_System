package com.EWMS.DTO;

import java.util.List;

import com.EWMS.Entity.Order;
import com.EWMS.Entity.Product;

public class DashboardStats {

    private Long products;
    private Integer inventory;
    private Long orders;
    private Long warehouses;

    private List<Order> recentOrders;
    private List<Product> lowStockProducts;

    public Long getProducts() {
        return products;
    }

    public void setProducts(Long products) {
        this.products = products;
    }

    public Integer getInventory() {
        return inventory;
    }

    public void setInventory(Integer inventory) {
        this.inventory = inventory;
    }

    public Long getOrders() {
        return orders;
    }

    public void setOrders(Long orders) {
        this.orders = orders;
    }

    public Long getWarehouses() {
        return warehouses;
    }

    public void setWarehouses(Long warehouses) {
        this.warehouses = warehouses;
    }

    public List<Order> getRecentOrders() {
        return recentOrders;
    }

    public void setRecentOrders(List<Order> recentOrders) {
        this.recentOrders = recentOrders;
    }

    public List<Product> getLowStockProducts() {
        return lowStockProducts;
    }

    public void setLowStockProducts(List<Product> lowStockProducts) {
        this.lowStockProducts = lowStockProducts;
    }
}

