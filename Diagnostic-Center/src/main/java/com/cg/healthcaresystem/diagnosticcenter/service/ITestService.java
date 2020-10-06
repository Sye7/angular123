package com.cg.healthcaresystem.diagnosticcenter.service;

import com.cg.healthcaresystem.diagnosticcenter.entities.Test;

public interface ITestService {
	
	public Test addTest(Test test);
	public boolean removeTest(Long testId);
	public Test findTestById(Long testId);
	

}
