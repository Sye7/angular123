package com.cg.healthcaresystem.diagnosticcenter.util;

import java.math.BigInteger;

import org.springframework.stereotype.Component;

@Component
public class CenterValidation implements ICenterValidation {

	@Override
	public boolean contactNumberValidations(BigInteger contactNumber) {
		int a=contactNumber.toString().length();
		if(a<10 || a>10)
			return false;
		else
		return true;
	}

}
