package com.trackfic.service;

import java.util.List;

import com.trackfic.dao.AccidentTypeDaoInterface;
import com.trackfic.model.AccidentType;

public class AccidentTypeServiceImpl implements AccidentTypeServiceInterface{

	AccidentType returnedAccidentType;

	AccidentTypeDaoInterface accidentTypeDao;

	public AccidentTypeServiceImpl(AccidentTypeDaoInterface accidentTypeDao) {
		this.accidentTypeDao = accidentTypeDao;
		this.returnedAccidentType = new AccidentType();
	}

	public List<AccidentType> getAllAccidentTypes() {
		
		return accidentTypeDao.getAllAccidentTypes();
	}

	public AccidentType getAccidentTypeById(int id) {
		
		returnedAccidentType = accidentTypeDao.findAccidentTypeById(id);
		return returnedAccidentType;
	}

	public AccidentType addNewAccidentType(AccidentType accidentType) {
		returnedAccidentType = accidentTypeDao.createNewAccidentType(accidentType);
		return returnedAccidentType;
	}

	public AccidentType updateAccidentTypeData(int id, AccidentType accidentType) {
		
		if(id!= accidentType.getTypeId())
		{
			//throw an error 
		}
		
		accidentTypeDao.updateAccidentTypeType(accidentType);
		
		return accidentType;
	}

	public void deleteAccidentType(int id) {

		accidentTypeDao.deleteAccidentType(id);
	}

}
