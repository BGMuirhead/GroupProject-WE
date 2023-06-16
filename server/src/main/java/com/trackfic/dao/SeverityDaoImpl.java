package com.trackfic.dao;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.trackfic.enums.AccidentSeverity;
import com.trackfic.exception.AccidentNotFoundException;
import com.trackfic.mapper.SeverityMapper;

@Component
public class SeverityDaoImpl implements SeverityDaoInterface {

	
	private final JdbcTemplate jdbcTemplate;

	public SeverityDaoImpl(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	@Override
	public AccidentSeverity findSeverityByValue(String value) {
		
		String sql = "select * from severity where severity=?";
		AccidentSeverity severity;
		try {
			severity=jdbcTemplate.queryForObject(sql, new Object[] { value }, new SeverityMapper());
		}
		catch(Exception ex)
		{
			throw new AccidentNotFoundException("Severity with value: "+value+" not found");
		}
		return severity;
		
	}

}
