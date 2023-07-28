package com.becoder.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@SuppressWarnings("unused")
@Entity

public class Contact {
	@Id
			

	@Column(name="name")
	private String name;
	
@Column(name="contactNumber")
private Double contactNumber;
@Column(name="email")
private String email;
@Column(name="message")
private String message;


public Contact(String name,Double contactNumber,String email,String message) {
	super();
	this.name = name;
	this.contactNumber = contactNumber;
	this.email = email;
	this.message = message;


}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public Double getContactNumber() {
	return contactNumber;
}
public void setContactNumber(Double contactNumber) {
	this.contactNumber = contactNumber;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getMessage() {
	return message;
}
public void setMessage(String message) {
	this.message = message;
}


public Contact() {
}
}