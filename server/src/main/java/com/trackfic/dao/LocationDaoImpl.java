package com.trackfic.dao;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.trackfic.mapper.LocationMapper;
import com.trackfic.model.Location;

@Component
public class LocationDaoImpl implements LocationDaoInterface {

	private final JdbcTemplate jdbcTemplate;

	public LocationDaoImpl(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public Location createNewLocation(Location location) {

		String sql = "insert into location values(?,?,?,?,?,?,?,?)";

		jdbcTemplate.update(sql, location.getLocationId(), location.getStreetNumber(), location.getStreetName(),
				location.getSuburb(), location.getPostcode(), location.getState(), location.getLatitude(),
				location.getLongitude());

		return location;
	}

	@Override
	public List<Location> getAllLocations() {

		String sql = "select * from location";

		return jdbcTemplate.query(sql, new LocationMapper());
	}

	@Override
	public Location findLocationById(int id) {
		
		String sql = "select * from location where location_id=?";
		
		return jdbcTemplate.queryForObject(sql, new Object[] {id}, new LocationMapper());
	}

	@Override
	public void updateLocation(Location location) {

		String sql = "update location set street_number=?,street_name=?,suburb=?,postcode=?,loc_state=?,latitude=?,longitude=? where location_id=?";
		jdbcTemplate.update(sql, location.getStreetNumber(), location.getStreetName(),
				location.getSuburb(), location.getPostcode(), location.getState(), location.getLatitude(),
				location.getLongitude(),location.getLocationId());
	}

	@Override
	public void deleteLocation(int id) {
		String sql= "delete from location where location_id=?";
		jdbcTemplate.update(sql, new Object[] {id});
	}

}
