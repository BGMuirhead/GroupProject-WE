package com.trackfic.model;

import java.sql.Date;
import java.sql.Time;

public class Accident {

	private int accidentId;
	private int vehicleCount;
	private Time accidentTime;
	private Date accidentDate;
	private String accidentDesc;
	private int locationId;
	private int accidentTypeId;
	private String witnessEmail;
	public Accident(int accidentId, int vehicleCount, Time accidentTime, Date accidentDate, String accidentDesc,
			int locationId, int accidentTypeId, String witnessEmail) {
		super();
		this.accidentId = accidentId;
		this.vehicleCount = vehicleCount;
		this.accidentTime = accidentTime;
		this.accidentDate = accidentDate;
		this.accidentDesc = accidentDesc;
		this.locationId = locationId;
		this.accidentTypeId = accidentTypeId;
		this.witnessEmail = witnessEmail;
	}
	public int getAccidentId() {
		return accidentId;
	}
	public void setAccidentId(int accidentId) {
		this.accidentId = accidentId;
	}
	public int getVehicleCount() {
		return vehicleCount;
	}
	public void setVehicleCount(int vehicleCount) {
		this.vehicleCount = vehicleCount;
	}
	public Time getAccidentTime() {
		return accidentTime;
	}
	public void setAccidentTime(Time accidentTime) {
		this.accidentTime = accidentTime;
	}
	public Date getAccidentDate() {
		return accidentDate;
	}
	public void setAccidentDate(Date accidentDate) {
		this.accidentDate = accidentDate;
	}
	public String getAccidentDesc() {
		return accidentDesc;
	}
	public void setAccidentDesc(String accidentDesc) {
		this.accidentDesc = accidentDesc;
	}
	public int getLocationId() {
		return locationId;
	}
	public void setLocationId(int locationId) {
		this.locationId = locationId;
	}
	public int getAccidentTypeId() {
		return accidentTypeId;
	}
	public void setAccidentTypeId(int accidentTypeId) {
		this.accidentTypeId = accidentTypeId;
	}
	public String getWitnessEmail() {
		return witnessEmail;
	}
	public void setWitnessEmail(String witnessEmail) {
		this.witnessEmail = witnessEmail;
	}

	
}
