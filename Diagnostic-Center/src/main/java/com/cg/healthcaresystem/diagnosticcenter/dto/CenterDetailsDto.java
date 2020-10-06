package com.cg.healthcaresystem.diagnosticcenter.dto;

import java.math.BigInteger;
import java.util.List;

import com.cg.healthcaresystem.diagnosticcenter.entities.Test;


public class CenterDetailsDto {

	private Long centerId;
	private String centerName;
	private BigInteger contactNumber;
	private String centerLocation;
	private List<Test> listOfTest;
	

	public List<Test> getListOfTest() {
		return listOfTest;
	}

	public void setListOfTest(List<Test> listOfTest) {
		this.listOfTest = listOfTest;
	}

	public BigInteger getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(BigInteger centerNumber) {
		this.contactNumber = centerNumber;
	}

	public String getCenterLocation() {
		return centerLocation;
	}

	public void setCenterLocation(String centerLocation) {
		this.centerLocation = centerLocation;
	}

	public String getCenterName() {
		return centerName;
	}

	public void setCenterName(String centerName) {
		this.centerName = centerName;
	}

	public Long getCenterId() {
		return centerId;
	}

	public void setCenterId(Long centerId) {
		this.centerId = centerId;
	}

	
	
}
