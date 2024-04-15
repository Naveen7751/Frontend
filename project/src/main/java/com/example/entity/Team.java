package com.example.entity;
 
import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.*;
 
@Entity
@Table(name= "Teams")
public class Team {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int tid;
	private String ideaTitle;
    private String ideaDescription;
	private String domain;
	private String teamName;
	@OneToMany(mappedBy = "team", cascade = CascadeType.ALL)
	private List<TeamMember> teamMembers;
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id", foreignKey = @ForeignKey(name = "fk_user"))
    private user user;
	
	
 
	public Team() {
		
	}
	public Team(String teamName, String ideaTitle, String ideaDescription, String domain) {
	    this.teamName = teamName;
	    this.ideaTitle = ideaTitle;
	    this.ideaDescription = ideaDescription;
	    this.domain = domain;
	}
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
	public user getUser() {
		return user;
	}
	public void setUser(user user) {
		this.user = user;
	}
	public List<TeamMember> getTeamMembers() {
        return teamMembers;
    }

    public void setTeamMembers(List<TeamMember> teamMembers) {
        this.teamMembers = teamMembers;
        for (TeamMember member : teamMembers) {
            member.setTeam(this);
        }
    }
	
 
}
 