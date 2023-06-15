package com.trackfic.model;

public class Location {

	private int locationId;
	private String streetName;
	private String StreetNumber;
	private String suburb;
	private int postcode;
	private String state;
	private double latitude;
	private double longitude;
	public Location(int locationId, String streetName, String streetNumber, String suburb, int postcode, String state,
			double latitude, double longitude) {
		super();
		this.locationId = locationId;
		this.streetName = streetName;
		StreetNumber = streetNumber;
		this.suburb = suburb;
		this.postcode = postcode;
		this.state = state;
		this.latitude = latitude;
		this.longitude = longitude;
	}
	public Location() {
	}
	
	public int getLocationId() {
		return locationId;
	}
	public void setLocationId(int locationId) {
		this.locationId = locationId;
	}
	public String getStreetName() {
		return streetName;
	}
	public void setStreetName(String streetName) {
		this.streetName = streetName;
	}
	public String getStreetNumber() {
		return StreetNumber;
	}
	public void setStreetNumber(String streetNumber) {
		StreetNumber = streetNumber;
	}
	public String getSuburb() {
		return suburb;
	}
	public void setSuburb(String suburb) {
		this.suburb = suburb;
	}
	public int getPostcode() {
		return postcode;
	}
	public void setPostcode(int postcode) {
		this.postcode = postcode;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public double getLatitude() {
		return latitude;
	}
	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}
	public double getLongitude() {
		return longitude;
	}
	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	

}
