package com.trackfic.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

import com.trackfic.dao.WitnessDaoInterface;
import com.trackfic.exception.DataMismatchException;
import com.trackfic.model.Witness;

public class WitnessServiceTests {

	private WitnessServiceImpl witnessService;
	
	public WitnessServiceTests() {
		WitnessDaoInterface witnessDao = new WitnessDaoStubImpl();
		witnessService = new WitnessServiceImpl(witnessDao);
		
	}
	
	
	@Test
	public void createWitnessTest()
	{
		Witness temp = new Witness("email", "firstName", "lastName", 1);
		Witness test = witnessService.addNewWitness(temp);
		
		assertEquals(temp, test);
		
		temp = new Witness();
		temp.setEmail("email");
		temp.setFirstName("");
		temp.setLastName("");
		temp.setMobile(0);
		test = witnessService.addNewWitness(temp);
		
		assertNull(test);
		
	}
	
	public void updateWitnessTest()
	{
		Witness temp = new Witness("email", "firstName", "lastName", 1);
		Witness test = witnessService.updateWitnessData("email", temp);
				
		assertEquals(temp, test);
		
		try {
			temp = witnessService.updateWitnessData("test", temp);
			assertTrue(false);
		}
		catch(DataMismatchException e)
		{
			assertTrue(true);
		}
		
		
		
		
	}
	
	public void findWitnessByEmailTest() {
		Witness temp = new Witness("email", "firstName", "lastName", 1);
		Witness test = witnessService.getWitnessByEmail("email");
		assertEquals(temp, test);
		test = witnessService.getWitnessByEmail("test");
		assertNull(test);
		
	}
	
	
}
