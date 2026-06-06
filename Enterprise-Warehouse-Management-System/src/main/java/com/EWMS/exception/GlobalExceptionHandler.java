package com.EWMS.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(InsufficientStockException.class)
	
	public ResponseEntity<String> handleIsufficientStock(InsufficientStockException ex){
		return ResponseEntity.badRequest().body(ex.getMessage());
	}
	
	@ExceptionHandler(RuntimeException.class)
	
	public ResponseEntity<String> handleRuntimeException(RuntimeException ex){
		return ResponseEntity.badRequest().body(ex.getMessage());
	
	}
}
