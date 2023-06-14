package com.trackfic.mapper;

import java.sql.Date;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.jdbc.core.RowMapper;

import com.trackfic.model.Accident;
import com.trackfic.model.AccidentType;
import com.trackfic.model.Location;
import com.trackfic.model.Witness;


public class AccidentMapper implements RowMapper<Accident> {

	@Override
	public Accident mapRow(ResultSet rs, int rowNum) throws SQLException {
		
		
		int accidentId = rs.getInt("type_id");
		int vehicleCount = rs.getInt("vehicle_count");
		Date accidentDate = rs.getDate("accident_date");
		Time accidentTime = rs.getTime("accident_time");
		int locationId= rs.getInt("location_id");
		int witnessId= rs.getInt("witness_id");
		int typeId= rs.getInt("accident_type");
		
		
		Accident accident = new Accident(accidentId, vehicleCount, accidentTime, accidentDate, locationId, witnessId, typeId);

		return accident;
	}

}
