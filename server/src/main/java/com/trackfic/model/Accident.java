package com.trackfic.model;

import java.sql.Date;
import java.sql.Time;

public class Accident {

	private int accidentId;
	private int vehicleCount;
	private Time accidentTime;
	private Date accidentDate;
	private int locationId;
	private int witnessId;
	private int typeId;

	public Accident(int accidentId, int vehicleCount, Time accidentTime, Date accidentDate, int locationId,
			int witnessId, int typeId) {
		super();
		this.accidentId = accidentId;
		this.vehicleCount = vehicleCount;
		this.accidentTime = accidentTime;
		this.accidentDate = accidentDate;
		this.locationId = locationId;
		this.witnessId = witnessId;
		this.typeId = typeId;
	}

	public Accident() {
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

	public int getLocationId() {
		return locationId;
	}

	public void setLocationId(int locationId) {
		this.locationId = locationId;
	}

	public int getWitnessId() {
		return witnessId;
	}

	public void setWitnessId(int witnessId) {
		this.witnessId = witnessId;
	}

	public int getTypeId() {
		return typeId;
	}

	public void setTypeId(int typeId) {
		this.typeId = typeId;
	}

}
