package com.trackfic.dao;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.trackfic.mapper.WitnessMapper;
import com.trackfic.model.Witness;

@Component
public class WitnessDaoImpl implements WitnessDaoInterface {

	private final JdbcTemplate jdbcTemplate;
	
	public WitnessDaoImpl(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	@Override
	public Witness createNewWitness(Witness witness) {
		
		String sql = "insert into witness values (?,?,?,?)";
		jdbcTemplate.update(sql,witness.getEmail(),witness.getFirstName(),witness.getLastName(),witness.getMobile());
		
		
		return witness;
	}

	@Override
	public List<Witness> getAllWitnesss() {

		String sql = "select * from witness";
		
		return jdbcTemplate.query(sql, new WitnessMapper());
		
	}

	@Override
	public Witness findWitnessByEmail(String email) {

		String sql = "select * from witness where witness_email=?";
		
		return jdbcTemplate.queryForObject(sql, new Object[] {email}, new WitnessMapper());
	}

	@Override
	public void updateWitness(Witness witness) {

		String sql = "update witness set first_name =?, last_name =?, mobile=? where witness_email=?";
		
		jdbcTemplate.update(sql,witness.getFirstName(),witness.getLastName(),witness.getMobile(),witness.getEmail());
	
	}

	@Override
	public void deleteWitness(String email) {
		String sql = "delete from witness where witness_email =?";
		jdbcTemplate.update(sql, new Object[] {email});
	}

	

}
