package com.trackfic.service;

import org.springframework.stereotype.Service;

import com.trackfic.dao.SeverityDaoInterface;
import com.trackfic.enums.AccidentSeverity;
@Service
public class SeverityServiceImpl implements SeverityServiceInterface {

	SeverityDaoInterface severityDao;
	
	public SeverityServiceImpl(SeverityDaoInterface severityDao ) {
		this.severityDao =severityDao;
		
	}
	
	@Override
	public AccidentSeverity getSeverityByValue(String value) {
		return severityDao.findSeverityByValue(value);
	}

}
