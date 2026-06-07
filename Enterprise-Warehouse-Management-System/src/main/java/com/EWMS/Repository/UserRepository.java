package com.EWMS.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.EWMS.Entity.User;

public interface UserRepository extends JpaRepository<User,Long> {
	
	 Optional<User> findByUsername(String username);

}
