package com.example.DTO;

public class UserDTO {
	private String username;
    private String password;
    private String email;
    private String role;
    private String ideaTitle;
    private String ideaDescription;
    private String domain;
    private String teamName;
    
    public UserDTO() {
    }

    public UserDTO(String username, String password, String email, String role, String ideaTitle, String ideaDescription, String domain, String teamName) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
        this.ideaTitle = ideaTitle;
        this.ideaDescription = ideaDescription;
        this.domain = domain;
        this.teamName = teamName;
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getIdeaTitle() {
		return ideaTitle;
	}
	public void setIdeaTitle(String ideaTitle) {
		this.ideaTitle = ideaTitle;
	}
	public String getIdeaDescription() {
		return ideaDescription;
	}
	public void setIdeaDescription(String ideaDescription) {
		this.ideaDescription = ideaDescription;
	}
	public String getDomain() {
		return domain;
	}
	public void setDomain(String domain) {
		this.domain = domain;
	}
	public String getTeamName() {
		return teamName;
	}
	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}
    
    

}
