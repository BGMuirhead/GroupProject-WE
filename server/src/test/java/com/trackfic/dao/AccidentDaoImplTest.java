package com.trackfic.dao;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.sql.Date;
import java.util.List;

import org.apache.tomcat.jni.Time;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import com.trackfic.enums.AccidentSeverity;
import com.trackfic.model.Accident;

//@DataJdbcTest
public class AccidentDaoImplTest {

	@Autowired
	private AccidentDaoImpl accidentDao;
	

	public AccidentDaoImplTest() {
		
		DriverManagerDataSource dataSource = new DriverManagerDataSource();

		dataSource.setDriverClassName("com.mysql.jdbc.Driver");
		dataSource.setUrl("jdbc:mysql://localhost:3307/trackfics");
		dataSource.setUsername("root");
		dataSource.setPassword("root");
		JdbcTemplate template = new JdbcTemplate(dataSource);
		accidentDao= new AccidentDaoImpl(template);
		
	}
	
	@Test
	public void createTest()
	{
//		Accident accident = new Accident(3, "Test");
		Accident accident = new Accident(3, 1, new java.sql.Time(2, 20, 10), new Date(2020, 10, 23), "Description", 1, 1, "testPerson@email.com", AccidentSeverity.valueOf("High"));
		accidentDao.createNewAccident(accident);
		List<Accident> list = accidentDao.getAllAccidents();
		assertNotNull(list);
		assertEquals(3, list.size());
	}
	
	@Test
	public void getAllTest()
	{
		List<Accident> list = accidentDao.getAllAccidents();
		assertNotNull(list);
		assertEquals(2, list.size());
	}
	
	@Test
	public void getOneTest()
	{
		Accident accident = accidentDao.findAccidentById(2);
		assertNotNull(accident);
		assertEquals("Test Description", accident.getAccidentDesc());
	}
	
	@Test
	public void updateTest()
	{
		Accident accident = new Accident(2, 1, new java.sql.Time(2, 20, 10), new Date(2020, 10, 23), "Description", 1, 1, "testPerson@email.com",AccidentSeverity.valueOf("High"));
		accidentDao.createNewAccident(accident);
		accident.setAccidentDesc("Test Description");
		accidentDao.updateAccident(accident);
		
		Accident returned = accidentDao.findAccidentById(2);
		assertEquals(returned.getAccidentDesc(), "Test Description");
	}
	
	@Test
	public void deleteTest()
	{
		accidentDao.deleteAccident(2);
		accidentDao.deleteAccident(3);
		
		List<Accident> list = accidentDao.getAllAccidents();
		assertNotNull(list);
		assertEquals(1, list.size());
	}
}
