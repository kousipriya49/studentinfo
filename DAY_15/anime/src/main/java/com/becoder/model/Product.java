package com.becoder.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String name;

	private String feestatus;

	private Integer feespaid;

	private Integer remaining_fees_to_be_paid;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFeestatus() {
		return feestatus;
	}

	public void setFeestatus(String feestatus) {
		this.feestatus = feestatus;
	}

	public Integer getFeespaid() {
		return feespaid;
	}

	public void setFeespaid(Integer feespaid) {
		this.feespaid = feespaid;
	}

	public Integer getRemaining_fees_to_be_paid() {
		return remaining_fees_to_be_paid;
	}

	public void setRemaining_fees_to_be_paid(Integer remaining_fees_to_be_paid) {
		this.remaining_fees_to_be_paid = remaining_fees_to_be_paid;
	}
	

	
	

}