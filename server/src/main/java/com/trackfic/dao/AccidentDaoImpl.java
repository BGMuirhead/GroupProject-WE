package com.trackfic.dao;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.trackfic.mapper.AccidentMapper;
import com.trackfic.model.Accident;

@Component
public class AccidentDaoImpl implements AccidentDaoInterface {

	private final JdbcTemplate jdbcTemplate;

	public AccidentDaoImpl(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public Accident createNewAccident(Accident accident) {
		String sql = "insert into accident values(?,?,?,?,?,?,?,?)";

		jdbcTemplate.update(sql, accident.getAccidentId(), accident.getVehicleCount(), accident.getAccidentDate(),
				accident.getAccidentTime(), accident.getAccidentDesc(), accident.getLocationId(),
				accident.getAccidentTypeId(), accident.getWitnessEmail());

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

		return jdbcTemplate.queryForObject(sql, new Object[] { id }, new AccidentMapper());
	}

	@Override
	public void updateAccident(Accident accident) {
		String sql = "update accident set vehicle_count=?, accident_date=?, accident_time=?, acccident_desc=?, location_id=?, accident_type_id=?, witness_email=? where accident_id=? ";
		jdbcTemplate.update(sql, accident.getVehicleCount(), accident.getAccidentDate(), accident.getAccidentTime(),
				accident.getAccidentDesc(), accident.getLocationId(), accident.getAccidentTypeId(),
				accident.getWitnessEmail(), accident.getAccidentId());
	}

	@Override
	public void deleteAccident(int id) {

		String sql = "delete from accident where accident_id=?";
		jdbcTemplate.update(sql, new Object[] { id });
	}

}
