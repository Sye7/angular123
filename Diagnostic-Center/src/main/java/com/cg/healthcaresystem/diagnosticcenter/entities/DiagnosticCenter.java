package com.cg.healthcaresystem.diagnosticcenter.entities;



import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class DiagnosticCenter {
	private String centerName;
	@Id
	private long centerId;
	public List<Test> getListOfTest() {
		return listOfTest;
	}

	public void setListOfTest(List<Test> listOfTest) {
		this.listOfTest = listOfTest;
	}

	private BigInteger contactNumber;
	private String location;

	@OneToMany(targetEntity= Test.class , cascade = CascadeType.ALL)
	@JoinColumn(name= "dct_pk",referencedColumnName = "centerId") 
	private List<Test> listOfTest = new ArrayList<Test>();

	public DiagnosticCenter() {
		super();
	}

public DiagnosticCenter(String centerName, long centerId, BigInteger contactNumber, String location) {
	super();
	this.centerName = centerName;
	this.centerId = centerId;
	this.contactNumber = contactNumber;
	this.location = location;
}

public String getCenterName() {
	return centerName;
}

public void setCenterName(String centerName) {
	this.centerName = centerName;
}

public long getCenterId() {
	return centerId;
}

public void setCenterId(long centerId) {
	this.centerId = centerId;
}

public BigInteger getContactNumber() {
	return contactNumber;
}

public void setContactNumber(BigInteger contactNumber) {
	this.contactNumber = contactNumber;
}

public String getLocation() {
	return location;
}

public void setLocation(String location) {
	this.location = location;
}

@Override
public String toString() {
	return "DiagnosticCenter [centerName=" + centerName + ", centerId=" + centerId + ", contactNumber=" + contactNumber
			+ ", location=" + location + "]";
}

	
}
