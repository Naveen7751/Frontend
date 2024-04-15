package com.example.controller;


import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.user;
import com.example.service.user_services;


@RestController
@RequestMapping("/participant")
public class user_controller {
	@Autowired
	private user_services service;


	@PostMapping("/registration")
	public ResponseEntity<user> addUser(@RequestBody user rs) {
	    // Check if a user with the same email already exists
	    if (service.isUserExists(rs.getEmail())) {
	        return new ResponseEntity("User with the given email already exists", HttpStatus.CONFLICT);
	    }
	    user reg = service.addUser(rs);
	    
	    if (reg != null) {
	        return new ResponseEntity("User registered successfully check your mail", HttpStatus.OK);
	    } else {
	        return new ResponseEntity("User registration failed", HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	@PostMapping("/validate-otp")
	public ResponseEntity<String> validateOtp(@RequestParam String email, @RequestParam String enteredOtp) {
	    boolean isValid = service.validateOtp(email, enteredOtp);

	    if (isValid) {
	        return new ResponseEntity<>("OTP validation successful", HttpStatus.OK);
	    } else {
	        return new ResponseEntity<>("Invalid OTP", HttpStatus.UNAUTHORIZED);
	    }
	}



	

	@GetMapping("/user/{email}")
	public ResponseEntity<user> verifyUser(@PathVariable String email){
		user rs = service.verifyUser(email);
		if(rs != null)
			return new ResponseEntity("User verified", HttpStatus.OK);
		else
			return new ResponseEntity("User Not Found, Please register with us!!!",HttpStatus.NOT_FOUND);
		
	}
	
	@PostMapping("/user/login")
	public ResponseEntity<String> loginUser(@RequestParam String email,@RequestParam String password) {
	    user user = service.loginUser(email, password);

	    if (user != null) {
	        return new ResponseEntity<>("User Login successful", HttpStatus.OK);
	    } else {
	        return new ResponseEntity<>("Invalid username or password", HttpStatus.UNAUTHORIZED);
	    }
	}
	

//	@PostMapping("/submit-idea")
//	public ResponseEntity<String> submitIdeaDetails(@RequestBody Map<String, String> requestBody) {
//	    String email = requestBody.get("email");
//	    String ideaTitle = requestBody.get("ideaTitle");
//	    String ideaDescription = requestBody.get("ideaDescription");
//	    String domain = requestBody.get("domain");
//	    
//	    String teamName = service.getUserTeamName(email);
//
//	    // Call the service method to update the idea details and domain in the database
//	    service.submitIdeaDetails(email, ideaTitle, ideaDescription, domain);
//
//	    return new ResponseEntity<>("Idea details submitted successfully", HttpStatus.OK);
//	}
//	
//	 @PostMapping("/update-team")
//	    public ResponseEntity<String> updateTeamName(@RequestParam String email, @RequestParam String teamName) {
//	        user updatedUser = service.updateTeamName(email, teamName);
//
//	        if (updatedUser != null) {
//	            return new ResponseEntity<>("Team name updated successfully", HttpStatus.OK);
//	        } else {
//	            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
//	        }
//	    }
//	 
	 


}




