package com.EWMS.Security;

import java.nio.charset.StandardCharsets;
import java.util.Date;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {

	private static final String SECRET = "mysecretkeymysecretkeymysecretkey123456";

	 public String generateToken(String username) {
	        return Jwts.builder()
	                .setSubject(username)
	                .setIssuedAt(new Date())
	                .setExpiration(new Date(System.currentTimeMillis() + 86400000))
	                .signWith(
	                        Keys.hmacShaKeyFor(SECRET.getBytes()),
	                        SignatureAlgorithm.HS256)
	                .compact();
	    }

	public String extractUsername(String token) {

		Claims claims = Jwts.parserBuilder().setSigningKey(Keys.hmacShaKeyFor(SECRET.getBytes(StandardCharsets.UTF_8)))
				.build().parseClaimsJws(token).getBody();

		return claims.getSubject();
	}

	public boolean validateToken(String token, String username) {

		return extractUsername(token).equals(username);
	}
}