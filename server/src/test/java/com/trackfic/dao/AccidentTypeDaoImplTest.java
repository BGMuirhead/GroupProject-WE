package com.trackfic.dao;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import com.trackfic.model.AccidentType;

//@DataJdbcTest
public class AccidentTypeDaoImplTest {

	@Autowired
	private AccidentTypeDaoImpl accidentTypeDao;
	

	public AccidentTypeDaoImplTest() {
		
		DriverManagerDataSource dataSource = new DriverManagerDataSource();

		dataSource.setDriverClassName("com.mysql.jdbc.Driver");
		dataSource.setUrl("jdbc:mysql://localhost:3307/trackfics");
		dataSource.setUsername("root");
		dataSource.setPassword("root");
		JdbcTemplate template = new JdbcTemplate(dataSource);
		accidentTypeDao= new AccidentTypeDaoImpl(template);
		
	}
	
	@Test
	public void createTest()
	{
		AccidentType accidentType = new AccidentType(3, "Test");
		accidentTypeDao.createNewAccidentType(accidentType);
		List<AccidentType> list = accidentTypeDao.getAllAccidentTypes();
		assertNotNull(list);
		assertEquals(3, list.size());
	}
	
	@Test
	public void getAllTest()
	{
		List<AccidentType> list = accidentTypeDao.getAllAccidentTypes();
		assertNotNull(list);
		assertEquals(2, list.size());
	}
	
	@Test
	public void getOneTest()
	{
		AccidentType accidentType = accidentTypeDao.findAccidentTypeById(2);
		assertNotNull(accidentType);
		assertEquals("NotTest", accidentType.getAccidentType());
	}
	
	@Test
	public void updateTest()
	{
		AccidentType accidentType = new AccidentType(2, "Test2");
		accidentTypeDao.createNewAccidentType(accidentType);
		accidentType.setAccidentType("NotTest");
		accidentTypeDao.updateAccidentType(accidentType);
		
		AccidentType returned = accidentTypeDao.findAccidentTypeById(2);
		assertEquals(returned.getAccidentType(), "NotTest");
	}
	
	@Test
	public void deleteTest()
	{
		accidentTypeDao.deleteAccidentType(2);
		accidentTypeDao.deleteAccidentType(3);
		
		List<AccidentType> list = accidentTypeDao.getAllAccidentTypes();
		assertNotNull(list);
		assertEquals(1, list.size());
	}
}
