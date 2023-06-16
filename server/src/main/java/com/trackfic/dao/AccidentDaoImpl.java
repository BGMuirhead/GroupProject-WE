package com.trackfic.dao;

import java.sql.SQLException;
import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.trackfic.exception.AccidentNotFoundException;
import com.trackfic.exception.ForeignKeyDeletionException;
import com.trackfic.mapper.AccidentMapper;
import com.trackfic.model.Accident;

@Component
public class AccidentDaoImpl implements AccidentDaoInterface {

	private final JdbcTemplate jdbcTemplate;
	private Accident returnedAccident;

	public AccidentDaoImpl(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
		returnedAccident=new Accident();
	}

	@Override
	public Accident createNewAccident(Accident accident) {
		String sql = "insert into accident (vehicle_count,accident_date,accident_time,acccident_desc,location_id,accident_type_id,witness_email,severity) values(?,?,?,?,?,?,?,?)";

		jdbcTemplate.update(sql, accident.getVehicleCount(), accident.getAccidentDate(),
				accident.getAccidentTime(), accident.getAccidentDesc(), accident.getLocationId(),
				accident.getAccidentTypeId(), accident.getWitnessEmail(), accident.getAccidentSeverity().toString());

		sql = "select max(accident_id) from accident";
		int max = jdbcTemplate.queryForObject(sql, Integer.class);
		
		accident.setAccidentId(max);
		return accident;
	}

	@Override
	public List<Accident> getAllAccidents() {
		String sql = "select * from accident";

		return jdbcTemplate.query(sql, new AccidentMapper());
	}

	@Override
	public Accident findAccidentById(int id) {

		String sql = "select * from accident where accident_id=?";

		try {
			returnedAccident=jdbcTemplate.queryForObject(sql, new Object[] { id }, new AccidentMapper());
		}
		catch(Exception ex)
		{
			throw new AccidentNotFoundException("Accident with ID: "+id+" not found");
		}
		return returnedAccident;
	}

	@Override
	public void updateAccident(Accident accident) {
		String sql = "update accident set vehicle_count=?, accident_date=?, accident_time=?, acccident_desc=?, location_id=?, accident_type_id=?, witness_email=?, severity=? where accident_id=? ";
		jdbcTemplate.update(sql, accident.getVehicleCount(), accident.getAccidentDate(), accident.getAccidentTime(),
				accident.getAccidentDesc(), accident.getLocationId(), accident.getAccidentTypeId(),
				accident.getWitnessEmail(), accident.getAccidentSeverity().toString() , accident.getAccidentId());
	}

	@Override
	public void deleteAccident(int id){
		try {
			String sql = "delete from accident where accident_id=?";
			jdbcTemplate.update(sql, new Object[] { id });
		}
		catch(Exception e)
		{
			throw new ForeignKeyDeletionException("Foreign key references object to be deleted ensure correct delete order is followed");
		}
		
	}

}
