package com.trackfic.dao;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.sql.Date;
import java.util.List;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import com.trackfic.enums.AccidentSeverity;
import com.trackfic.model.Accident;

//@DataJdbcTest
@TestMethodOrder(OrderAnnotation.class)
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
	@Order(1)
	public void createTest()
	{
//		Accident accident = new Accident(3, "Test");
		AccidentSeverity severity = AccidentSeverity.Major;
		Accident accident = new Accident(2, 1, new java.sql.Time(2, 20, 10), new Date(2020, 10, 23), "Description", 1, 1, "testPerson@email.com", severity);
		accidentDao.createNewAccident(accident);
		List<Accident> list = accidentDao.getAllAccidents();
		assertNotNull(list);
		assertEquals(2, list.size());
	}
	
	@Test
	@Order(2)
	public void getAllTest()
	{
		List<Accident> list = accidentDao.getAllAccidents();
		assertNotNull(list);
		assertEquals(2, list.size());
	}
	
	@Test
	@Order(3)
	public void getOneTest()
	{
		Accident accident = accidentDao.findAccidentById(2);
		assertNotNull(accident);
		assertEquals("Description", accident.getAccidentDesc());
	}
	
	@Test
	@Order(4)
	public void updateTest()
	{
		AccidentSeverity severity = AccidentSeverity.Major;
		Accident accident = new Accident(3, 1, new java.sql.Time(2, 20, 10), new Date(2020, 10, 23), "Description", 1, 1, "testPerson@email.com", severity);
		accidentDao.createNewAccident(accident);
		accident.setAccidentDesc("Test Description");
		accidentDao.updateAccident(accident);
		
		Accident returned = accidentDao.findAccidentById(3);
		assertEquals(returned.getAccidentDesc(), "Test Description");
	}
	
	@Test
	@Order(5)
	public void deleteTest()
	{
		accidentDao.deleteAccident(2);
		accidentDao.deleteAccident(3);
		
		List<Accident> list = accidentDao.getAllAccidents();
		assertNotNull(list);
		assertEquals(1, list.size());
	}
}
