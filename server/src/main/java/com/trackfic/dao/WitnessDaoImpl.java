package com.trackfic.dao;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.trackfic.exception.ForeignKeyDeletionException;
import com.trackfic.exception.WitnessNotFoundException;
import com.trackfic.mapper.WitnessMapper;
import com.trackfic.model.Witness;

@Component
public class WitnessDaoImpl implements WitnessDaoInterface {

	private final JdbcTemplate jdbcTemplate;
	private Witness returnedWitness;

	public WitnessDaoImpl(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
		returnedWitness = new Witness();
	}

	@Override
	public Witness createNewWitness(Witness witness) {

		String sql = "insert into witness values (?,?,?,?,?)";
		jdbcTemplate.update(sql, witness.getEmail(), witness.getFirstName(), witness.getLastName(),
				witness.getMobile(),witness.getPassword());

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

		try {
			returnedWitness = jdbcTemplate.queryForObject(sql, new Object[] { email }, new WitnessMapper());
		} catch (Exception ex) {
			throw new WitnessNotFoundException("Witness with email: " + email + " not found");
		}

		return returnedWitness;
	}

	@Override
	public void updateWitness(Witness witness) {

		String sql = "update witness set first_name =?, last_name =?, mobile=? where witness_email=?";

		jdbcTemplate.update(sql, witness.getFirstName(), witness.getLastName(), witness.getMobile(),
				witness.getEmail());

	}

	@Override
	public void deleteWitness(String email) {
		try {
			String sql = "delete from witness where witness_email =?";
			jdbcTemplate.update(sql, new Object[] { email });
		} catch (Exception e) {
			throw new ForeignKeyDeletionException(
					"Foreign key references object to be deleted ensure correct delete order is followed");
		}
	}

	@Override
	public Witness login(String email, String password) {
		String sql = "select * from witness where witness_email=?";

		try {
			returnedWitness = jdbcTemplate.queryForObject(sql, new Object[] { email }, new WitnessMapper());

			if (returnedWitness.getPassword().equals(password)) {
				return returnedWitness;
			}
			else
			{
				throw new Exception();
			}
		} catch (Exception ex) {
			throw new WitnessNotFoundException("Cannot find a witness matching those credentials");
		}


	}

}
