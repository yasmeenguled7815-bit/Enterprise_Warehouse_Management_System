package com.EWMS.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.EWMS.DTO.AuthRequest;
import com.EWMS.Repository.UserRepository;
import com.EWMS.Security.AuthResponse;
import com.EWMS.Security.JwtUtil;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private JwtUtil jwtUtil;
	
	 @Autowired
	    private UserRepository userRepository;

	// LOGIN API
	@PostMapping("/login")
	public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {

		try {

			System.out.println("LOGIN REQUEST RECEIVED: " + request.getUsername());

			Authentication authentication = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
			
			System.out.println("Authentication successful");

			System.out.println("Username = " + request.getUsername());
			System.out.println("Password entered = " + request.getPassword());

			UserDetails userDetails = (UserDetails) authentication.getPrincipal();

			String token = jwtUtil.generateToken(userDetails.getUsername());

			System.out.println("Generated Token: " + token);

			return ResponseEntity.ok(new AuthResponse(token));

		} catch (Exception e) {

			System.out.println("LOGIN ERROR:");
			e.printStackTrace();

			throw e;
		}
	}

	@GetMapping("/test")
	public String test() {
		return "Auth Controller Working!";
	}

}
