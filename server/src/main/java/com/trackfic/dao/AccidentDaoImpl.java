package com.trackfic.dao;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.trackfic.model.Accident;

@Component
public class AccidentDaoImpl implements AccidentDaoInterface {

	/*
	 * private final JdbcTemplate jdbcTemplate;
	 * 
	 * public AccidentDaoImpl(JdbcTemplate jdbcTemplate) { this.jdbcTemplate =
	 * jdbcTemplate; }
	 */
	
	@Override
	public Accident createNewAccident(Accident accident) {
		System.out.println("Inside createNewAccident of AccidentDaoImpl");
		
		return null;
	}

	@Override
	public List<Accident> getAllAccidents() {
		System.out.println("Inside getAllAccidents of AccidentDaoImpl");
		return null;
	}

	@Override
	public Accident findAccidentById(int id) {
		System.out.println("Inside findAccidentById of AccidentDaoImpl");
		return null;
	}

	@Override
	public void updateAccident(Accident accident) {
		System.out.println("Inside updateAccident of AccidentDaoImpl");

	}

	@Override
	public void deleteAccident(int id) {
		System.out.println("Inside deleteAccident of AccidentDaoImpl");

	}

}
