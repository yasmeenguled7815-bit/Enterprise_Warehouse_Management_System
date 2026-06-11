package com.EWMS.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EWMS.DTO.AuthRequest;
import com.EWMS.Security.JwtUtil;

@RestController
@RequestMapping("/auth")
public class AuthController {

	@Autowired
	private AuthenticationManager authManager;

	@Autowired
	private JwtUtil jwtUtil;

	@PostMapping("/login")
	public String login(@RequestBody AuthRequest request) {
		
		 System.out.println("Username = " + request.getUsername());
		    System.out.println("Password = " + request.getPassword());

		authManager.authenticate(new UsernamePasswordAuthenticationToken(
				request.getUsername(), request.getPassword()));

		return jwtUtil.generateToken(request.getUsername());

	}
	
	 @GetMapping("/test")
	    public String test() {
	        return "Auth Controller Working!";
	    }

}
