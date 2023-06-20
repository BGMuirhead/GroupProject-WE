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

import com.trackfic.model.Witness;

//@DataJdbcTest
public class WitnessDaoImplTest {

	@Autowired
	private WitnessDaoImpl witnessDao;
	

	public WitnessDaoImplTest() {
		
		DriverManagerDataSource dataSource = new DriverManagerDataSource();

		dataSource.setDriverClassName("com.mysql.jdbc.Driver");
		dataSource.setUrl("jdbc:mysql://localhost:3307/trackfics");
		dataSource.setUsername("root");
		dataSource.setPassword("root");
		JdbcTemplate template = new JdbcTemplate(dataSource);
		witnessDao= new WitnessDaoImpl(template);
		
	}
	
	@Test
	public void createTest()
	{
		Witness witness = new Witness("test1@email.com", "Test", "User", 1234);
		witnessDao.createNewWitness(witness);
		List<Witness> list = witnessDao.getAllWitnesss();
		assertNotNull(list);
		assertEquals(4, list.size());
	}
	
	@Test
	public void getAllTest()
	{
		List<Witness> list = witnessDao.getAllWitnesss();
		assertNotNull(list);
		assertEquals(3, list.size());
	}
	
	@Test
	public void getOneTest()
	{
		Witness witness = witnessDao.findWitnessByEmail("test@email.com");
		assertNotNull(witness);
		assertEquals("Test", witness.getFirstName());
	}
	
	@Test
	public void updateTest()
	{
		Witness witness = new Witness("test@email.com", "Test", "User", 1234);
		witnessDao.createNewWitness(witness);
		witness.setLastName("Lastname");
		witnessDao.updateWitness(witness);
		
		Witness returned = witnessDao.findWitnessByEmail(witness.getEmail());
		assertEquals(returned.getLastName(), "Lastname");
	}
	
	@Test
	public void deleteTest()
	{
		witnessDao.deleteWitness("test@email.com");
		witnessDao.deleteWitness("test1@email.com");
//		assertNull(witnessDao.getAllWitnesss());
		
		List<Witness> list = witnessDao.getAllWitnesss();
		assertNotNull(list);
		assertEquals(2, list.size());
	}
}
