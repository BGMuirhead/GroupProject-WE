package com.trackfic.model;

public class Witness {

	private String witnessEmail;
	private String firstName;
	private String lastName;
	private int mobile;

	public Witness(String email, String firstName, String lastName, int mobile) {
		super();
		this.witnessEmail = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobile = mobile;
	}

	public Witness() {
	}

	public String getEmail() {
		return witnessEmail;
	}

	public void setEmail(String email) {
		this.witnessEmail = email;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getMobile() {
		return mobile;
	}

	public void setMobile(int mobile) {
		this.mobile = mobile;
	}

}
