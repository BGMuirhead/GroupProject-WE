package com.trackfic.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.trackfic.enums.AccidentSeverity;
import com.trackfic.model.AccidentType;

public class SeverityMapper implements RowMapper<AccidentSeverity> {

	@Override
	public AccidentSeverity mapRow(ResultSet rs, int rowNum) throws SQLException {

		AccidentSeverity severity = AccidentSeverity.valueOf(rs.getString("severity"));
		
		return severity;
	}

}
