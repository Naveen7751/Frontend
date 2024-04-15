package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Team;
import com.example.entity.TeamMember;
import com.example.service.TeamService;

@RestController
@RequestMapping("/teams")
public class TeamController {

    @Autowired
    private TeamService teamService;

    @PostMapping("/add")
    public ResponseEntity<Team> addTeam(@RequestBody Team team) {
        Team addedTeam = teamService.addTeam(team);
        if (addedTeam != null) {
            return new ResponseEntity<>(addedTeam, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    
    @PutMapping("/{tid}/update-team-name")
    public ResponseEntity<Team> updateTeamName(@PathVariable int tid, @RequestBody String teamName) {
        Team updatedTeam = teamService.updateTeamName(tid, teamName);

        if (updatedTeam != null) {
            return new ResponseEntity<>(updatedTeam, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/{teamId}/add-members")
    public ResponseEntity<Team> addTeamMembers(
            @PathVariable int teamId,
            @RequestParam String teamName, // Assuming team name is passed as a query parameter
            @RequestBody List<TeamMember> teamMembers) {
        Team updatedTeam = teamService.addTeamMembers(teamId, teamMembers, teamName);

        if (updatedTeam != null) {
            return new ResponseEntity<>(updatedTeam, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    
    @PutMapping("/{teamId}/update-member/{memberId}")
    public ResponseEntity<Team> updateTeamMember(
            @PathVariable int teamId,
            @PathVariable Long memberId,
            @RequestBody TeamMember updatedMember) {

        Team updatedTeam = teamService.updateTeamMember(teamId, memberId, updatedMember);

        if (updatedTeam != null) {
            return new ResponseEntity<>(updatedTeam, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    
    
 


 
}
