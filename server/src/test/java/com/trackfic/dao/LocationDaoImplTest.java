package com.trackfic.dao;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import com.trackfic.model.Location;

//@DataJdbcTest
public class LocationDaoImplTest {

	@Autowired
	private LocationDaoImpl locationDao;
	

	public LocationDaoImplTest() {
		
		DriverManagerDataSource dataSource = new DriverManagerDataSource();

		dataSource.setDriverClassName("com.mysql.jdbc.Driver");
		dataSource.setUrl("jdbc:mysql://localhost:3307/trackfics");
		dataSource.setUsername("root");
		dataSource.setPassword("root");
		JdbcTemplate template = new JdbcTemplate(dataSource);
		locationDao= new LocationDaoImpl(template);
		
	}
	
	@Test
	public void createTest()
	{
		Location location = new Location();
		location.setPostcode(1);
		location.setState("NSW");
		locationDao.createNewLocation(location);
		List<Location> list = locationDao.getAllLocations();
		assertNotNull(list);
		assertEquals(3, list.size());
	}
	
	@Test
	public void getAllTest()
	{
		List<Location> list = locationDao.getAllLocations();
		assertNotNull(list);
		assertEquals(2, list.size());
	}
	
	@Test
	public void getOneTest()
	{
		Location location = locationDao.findLocationById(1);
		assertNotNull(location);
		assertEquals("Kellyville", location.getSuburb());
	}
	
	@Test
	public void updateTest()
	{
		Location location = new Location(2, "Test Street", "2", "Test Suburb", 1, "NSW", 0, 0);
		locationDao.createNewLocation(location);
		location.setSuburb("New Suburb");
		locationDao.updateLocation(location);
		
		Location returned = locationDao.findLocationById(2);
		assertEquals(returned.getSuburb(), "New Suburb");
	}
	
	@Test
	public void deleteTest()
	{
		locationDao.deleteLocation(2);
		locationDao.deleteLocation(3);

		
//		assertNull(locationDao.getAllLocations());
		
		List<Location> list = locationDao.getAllLocations();
		assertNotNull(list);
		assertEquals(1, list.size());
	}
}
