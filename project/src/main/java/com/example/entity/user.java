package com.example.entity;

import java.time.LocalDate;
import java.util.List;
import java.util.Random;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class user {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "user_id")
	private int id;
	private String username;
	private String password;
	private String email;
	private String role;
	//private String ideaTitle;
	
	@Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;
    
    @Column(name = "otp")
    private String otp;
	
	
//	@Column(name = "idea_description")
//    private String ideaDescription;
//	
//	 @Column(name = "domain")
//	 private String domain;
//	 
//	 @Column(name = "team_name")
//	 private String teamName;

	

	public user() {

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}
	

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
//	public String getIdeaTitle() {
//	    return ideaTitle;
//	}
//
//	public void setIdeaTitle(String ideaTitle) {
//	    this.ideaTitle = ideaTitle;
//	}
//
//	public String getIdeaDescription() {
//		return ideaDescription;
//	}
//
//	public void setIdeaDescription(String ideaDescription) {
//		this.ideaDescription = ideaDescription;
//	}
//
//	public String getDomain() {
//		return domain;
//	}
//
//	public void setDomain(String domain) {
//		this.domain = domain;
//	}
//
//	public String getTeamName() {
//		return teamName;
//	}
//
//	public void setTeamName(String teamName) {
//		this.teamName = teamName;
//	}
	
	public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
    
    public String generateUsername() {
        String username = getFirstName().toLowerCase() + getDateOfBirth().getYear();
        return username;
    }

	public String getOtp() {
		return otp;
	}

	public void setOtp(String otp) {
		this.otp = otp;
	}
	public String generateOtp() {
	    Random random = new Random();
	    int otp = 100000 + random.nextInt(900000);
	    return String.valueOf(otp);
	}
    
	
	
	
	

}
