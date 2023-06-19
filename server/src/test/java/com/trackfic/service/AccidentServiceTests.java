package com.trackfic.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.sql.Date;

import org.junit.jupiter.api.Test;

import com.trackfic.dao.AccidentDaoInterface;
import com.trackfic.enums.AccidentSeverity;
import com.trackfic.exception.DataMismatchException;
import com.trackfic.model.Accident;

public class AccidentServiceTests {

	private AccidentServiceImpl accidentService;
	
	public AccidentServiceTests() {
		AccidentDaoInterface accidentDao = new AccidentDaoStubImpl();
		accidentService = new AccidentServiceImpl(accidentDao);
		
	}
	
	//tests the create accident method of the accident service layer
	@Test
	public void createAccidentTest()
	{
		Accident temp =new Accident(1, 1, new java.sql.Time(11, 51, 10), new Date(2020, 10, 23), "accidentDesc", 1, 1, "email", AccidentSeverity.Major);
		Accident test = accidentService.addNewAccident(temp);
		
		assertEquals(temp, test);
		
		temp = new Accident();
		temp.setAccidentDesc("");
		test = accidentService.addNewAccident(temp);
		
		assertNull(test);
		
	}
	
	//tests the update accident method of the accident service layer
	public void updateAccidentTest()
	{
		Accident temp =  new Accident(1, 1, new java.sql.Time(11, 51, 10), new Date(2020, 10, 23), "accidentDesc", 1, 1, "email", AccidentSeverity.Major);
		Accident test = accidentService.updateAccidentData(1, temp);
				
		assertEquals(temp, test);
		
		try {
			temp = accidentService.updateAccidentData(2, temp);
			assertTrue(false);
		}
		catch(DataMismatchException e)
		{
			assertTrue(true);
		}
		
		
		
	}
	
	//tests the find accident by id method of the accident service layer
	public void findAccidentByIdTest() {
		Accident temp =  new Accident(1, 1, new java.sql.Time(11, 51, 10), (java.sql.Date) new Date(2023, 6, 6), "accidentDesc", 1, 1, "email", AccidentSeverity.Major);
		Accident test = accidentService.getAccidentById(1);
		assertEquals(temp, test);
		test = accidentService.getAccidentById(2);
		assertNull(test);
		
	}
	
	//remaining service methods are passthrough methods so are untested here 
	
	
}
