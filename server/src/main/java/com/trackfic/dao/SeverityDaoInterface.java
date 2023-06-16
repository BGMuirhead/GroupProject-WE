package com.trackfic.dao;

import com.trackfic.enums.AccidentSeverity;

public interface SeverityDaoInterface {
	
	AccidentSeverity findSeverityByValue(String value);

}
