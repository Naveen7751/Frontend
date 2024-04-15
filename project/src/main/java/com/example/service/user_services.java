package com.example.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.entity.Team;
import com.example.entity.user;
import com.example.repo.TeamRepo;
import com.example.repo.user_repo;

@Service
public class user_services {

	@Autowired
	private user_repo repo;

	@Autowired
	private TeamRepo teamRepo;

	@Autowired
	private JavaMailSender javaMailSender;




	public user addUser(user rs) {

		if (isUserExists(rs.getEmail())) {
			return null;
		}
		// Generate and set OTP
		String generatedOtp = rs.generateOtp();
		rs.setOtp(generatedOtp);

		String generatedUsername = rs.generateUsername();

		rs.setUsername(generatedUsername);

		user savedUser = repo.saveAndFlush(rs);

//		sendRegistrationEmail(savedUser);
		sendOtpEmail(savedUser);
		return savedUser;
	}

//	private void sendRegistrationEmail(user user) {
//		SimpleMailMessage message = new SimpleMailMessage();
//		message.setTo(user.getEmail());
//		message.setSubject("Registration Successful");
//		message.setText("Dear " + user.getFirstName() + ",\n\n" +"OTP: " + user.getOtp()+ ",\n\n"+ "Thank you for registering with us!\n\n"
//				+ "Your username: " + user.getUsername() + "\n" + "Your password: " + user.getPassword() + "\n\n"
//				+ "Best regards,\nThe Team");
//
//		javaMailSender.send(message);
//
//	}
	
	private void sendOtpEmail(user user) {
	    SimpleMailMessage message = new SimpleMailMessage();
	    message.setTo(user.getEmail());
	    message.setSubject("OTP Verification");
	    message.setText("Dear " + user.getFirstName() + ",\n\n" + "Your OTP for email verification: " + user.getOtp() + "\n\n"
	            + "Please enter this OTP to complete your registration.\n\n" + "Best regards,\nThe Team");

	    javaMailSender.send(message);
	}
	private void sendLoginCredentials(user user) {
	    SimpleMailMessage message = new SimpleMailMessage();
	    message.setTo(user.getEmail());
	    message.setSubject("Login Credentials");
	    message.setText("Dear " + user.getFirstName() + ",\n\n"
	            + "Your login credentials:\n\n"
	            + "Username: " + user.getUsername() + "\n"
	            + "Password: " + user.getPassword() + "\n\n"
	            + "Thank you for registering with us!\n\n"
	            + "Best regards,\nThe Team");

	    javaMailSender.send(message);
	}

	public boolean isUserExists(String email) {
		Optional<user> userOptional = Optional.ofNullable(repo.findByEmail(email));
		return userOptional.isPresent();
	}

	public user verifyUser(String email) {
		Optional<user> op = Optional.ofNullable(repo.findByEmail(email));
		if (op.isPresent())
			return op.get();
		else
			return null;
	}

	public user loginUser(String email, String password) {
		user user = repo.findByEmail(email);
		if (user != null && user.getPassword().equals(password)) {
			return user;
		}
		return null;
	}
//	public boolean validateOtp(String email, String enteredOtp) {
//	    user user = repo.findByEmail(email);
//
//	    if (user != null && user.getOtp().equals(enteredOtp)) {
//	        // Clear OTP after successful validation
//	        user.setOtp(null);
//	        repo.save(user);
//	        return true;
//	    }
//	    return false;
//	}
	public boolean validateOtp(String email, String enteredOtp) {
	    user user = repo.findByEmail(email);

	    if (user != null && user.getOtp() != null && user.getOtp().equals(enteredOtp)) {
	        user.setOtp(null);
	        repo.save(user);
	        sendLoginCredentials(user);

	        return true;
	    }
	    return false;
	}


//	public user updateIdeaTitle(String email, String ideaTitle) {
//	    user existingUser = repo.findByEmail(email);
//
//	    if (existingUser != null) {
//	        existingUser.setIdeaTitle(ideaTitle);
//	        return repo.save(existingUser);
//	    }
//
//	    return null;
//	}

//	
//	public void submitIdeaDetails(String email, String ideaTitle, String ideaDescription, String domain) {
//        // Retrieve user by email
//        user existingUser = repo.findByEmail(email);
//
//        if (existingUser != null) {
//            // Update the ideaTitle, ideaDescription, and domain fields
//            existingUser.setIdeaTitle(ideaTitle);
//            existingUser.setIdeaDescription(ideaDescription);
//            existingUser.setDomain(domain);
//            repo.save(existingUser);
//        }
//    }
//
//	 public user updateTeamName(String email, String teamName) {
//	        user existingUser = repo.findByEmail(email);
//
//	        if (existingUser != null) {
//	            existingUser.setTeamName(teamName);
//	            return repo.save(existingUser);
//	        }
//
//	        return null;
//	    }
//	 
//	 public String getUserTeamName(String email) {
//	        user existingUser = repo.findByEmail(email);
//
//	        if (existingUser != null) {
//	            return existingUser.getTeamName();
//	        }
//
//	        return null;
//	    }
//	 
//	
//
}
