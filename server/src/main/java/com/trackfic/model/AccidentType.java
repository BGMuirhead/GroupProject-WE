package com.trackfic.model;

public class AccidentType {
	
	private int typeId;
	private String accidentDesc;
	private String accidentType;
	
	public AccidentType(int typeId, String accidentDesc, String accidentType) {
		super();
		this.typeId = typeId;
		this.accidentDesc = accidentDesc;
		this.accidentType = accidentType;
	}
	
	public AccidentType() {
	}

	public int getTypeId() {
		return typeId;
	}
	public void setTypeId(int typeId) {
		this.typeId = typeId;
	}
	public String getAccidentDesc() {
		return accidentDesc;
	}
	public void setAccidentDesc(String accidentDesc) {
		this.accidentDesc = accidentDesc;
	}
	public String getAccidentType() {
		return accidentType;
	}
	public void setAccidentType(String accidentType) {
		this.accidentType = accidentType;
	}
	
	
	
	

}
