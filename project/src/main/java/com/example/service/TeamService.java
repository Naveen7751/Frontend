package com.example.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Team;
import com.example.entity.TeamMember;
import com.example.repo.TeamMemberRepo;
import com.example.repo.TeamRepo;

import jakarta.transaction.Transactional;

@Service
public class TeamService {

    @Autowired
    private TeamRepo teamRepo;
    
    @Autowired
    private TeamMemberRepo teamMemberRepo;

    public Team addTeam(Team team) {
        return teamRepo.saveAndFlush(team);
    }

    public Team getTeamById(int tid) {
        return teamRepo.findById(tid).orElse(null);
    }
    
    @Transactional
    public Team updateTeamName(int tid, String teamName) {
        Team team = teamRepo.findById(tid).orElse(null);
        if (team != null) {
            team.setTeamName(teamName);
            return teamRepo.saveAndFlush(team);
        }
        return null;
    }
    

    @Transactional
    public Team addTeamMembers(int teamId, List<TeamMember> teamMembers, String teamName) {
        Team team = teamRepo.findById(teamId).orElse(null);

        if (team != null) {
            // Set team reference and name for each team member
            for (TeamMember member : teamMembers) {
                member.setTeam(team);
                member.setTeamName(teamName);
                teamMemberRepo.save(member);
            }

            List<TeamMember> existingMembers = team.getTeamMembers();
            existingMembers.addAll(teamMembers);
            team.setTeamMembers(existingMembers);

            // Update the team name
            team.setTeamName(teamName);

            return teamRepo.saveAndFlush(team);
        }

        return null;
    }
    
    
    @Transactional
    public Team updateTeamMember(int teamId, Long memberId, TeamMember updatedMember) {
        Team team = teamRepo.findById(teamId).orElse(null);

        if (team != null) {
            List<TeamMember> teamMembers = team.getTeamMembers();

            for (TeamMember member : teamMembers) {
                if (member.getMemberId().equals(memberId)) {
                    // Update the details of the specified team member
                    member.setFirstName(updatedMember.getFirstName());
                    member.setLastName(updatedMember.getLastName());
                    member.setEmail(updatedMember.getEmail());
                    member.setDepartment(updatedMember.getDepartment());

                    return teamRepo.saveAndFlush(team);
                }
            }
        }

        return null;
    }
    
    
    

    

    



}
