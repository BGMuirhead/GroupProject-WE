package com.trackfic.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.trackfic.model.AccidentType;

public class AccidentTypeMapper implements RowMapper<AccidentType> {

	@Override
	public AccidentType mapRow(ResultSet rs, int rowNum) throws SQLException {

		int typeId = rs.getInt("type_id");
		String accidentDesc = rs.getString("accident_desc");;
		String accidentType = rs.getString("accident_type");;;

		
		AccidentType accType = new AccidentType(typeId, accidentDesc, accidentType);
		return accType;
	}

}
