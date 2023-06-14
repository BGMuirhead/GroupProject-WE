package com.trackfic.service;

import java.util.List;

import com.trackfic.dao.AccidentDaoInterface;
import com.trackfic.model.Accident;

public class AccidentServiceImpl implements AccidentServiceInterface {

	Accident returnedAccident;

	AccidentDaoInterface accidentDao;

	public AccidentServiceImpl(AccidentDaoInterface accidentDao) {
		this.accidentDao = accidentDao;
		this.returnedAccident = new Accident();
	}

	public List<Accident> getAllAccidents() {
		
		List<Accident> accidents = accidentDao.getAllAccidents();
		
		return accidents;
	}

	public Accident getAccidentById(int id) {

		returnedAccident.setAccidentId(id);

		returnedAccident = accidentDao.findAccidentById(id);

		return returnedAccident;
	}

	public Accident addNewAccident(Accident accident) {
		
		returnedAccident = accidentDao.createNewAccident(accident);
		
		return returnedAccident;
	}

	public Accident updateAccidentData(int id, Accident accident) {
		
		if(id!= accident.getAccidentId())
		{
			//throw an error 
		}
		accidentDao.updateAccident(accident);
		
		return accident;
	}

	public void deleteAccident(int id) {
		
		accidentDao.deleteAccident(id);

	}

}
