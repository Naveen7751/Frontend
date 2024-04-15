package com.example.DTO;

public class TeamDTO {
	 private int tid;
	    private String ideaTitle;
	    private String ideaDescription;
	    private String domain;
	    private String teamName;
	    private UserDTO user;
		public int getTid() {
			return tid;
		}
		public void setTid(int tid) {
			this.tid = tid;
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
		public UserDTO getUser() {
			return user;
		}
		public void setUser(UserDTO user) {
			this.user = user;
		}
	    
	    
	    
	    
}
