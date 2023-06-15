package com.trackfic.dao;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.trackfic.mapper.AccidentTypeMapper;
import com.trackfic.model.AccidentType;

@Component
public class AccidentTypeDaoImpl implements AccidentTypeDaoInterface {

	private final JdbcTemplate jdbcTemplate;
	
	public AccidentTypeDaoImpl(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	@Override
	public AccidentType createNewAccidentType(AccidentType accidentType) {
		String sql = "insert into accidenttype values (?,?)";
		
		jdbcTemplate.update(sql,accidentType.getTypeId(),accidentType.getAccidentType());
		
		return accidentType;
	}

	@Override
	public List<AccidentType> getAllAccidentTypes() {

		String sql = "select * from accidenttype";
		
		
		return jdbcTemplate.query(sql, new AccidentTypeMapper());
	}

	@Override
	public AccidentType findAccidentTypeById(int id) {

		String sql = "select * from accidenttype where accident_type_id=?";
		
		return jdbcTemplate.queryForObject(sql, new Object[] {id},new AccidentTypeMapper());
	}

	@Override
	public void updateAccidentType(AccidentType accidentType) {

		String sql = "update accidenttype set accident_type=? where accident_type_id=?";
		jdbcTemplate.update(sql,accidentType.getAccidentType(),accidentType.getTypeId());
		
	}

	@Override
	public void deleteAccidentType(int id) {
		String sql= "delete from accidenttype where accident_type_id=?";
		jdbcTemplate.update(sql, new Object[] {id});

	}

}
