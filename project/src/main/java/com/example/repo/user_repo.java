package com.example.repo;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entity.user;

@Repository
public interface user_repo extends JpaRepository<user, Integer> {

	public user findByEmail(String email);

	public List<user> findByFirstName(String firstName);

	public List<user> findByLastName(String lastName);

	public List<user> findByDateOfBirth(LocalDate dateOfBirth);

}
