package com.cg.healthcaresystem.diagnosticcenter.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cg.healthcaresystem.diagnosticcenter.dao.IDiagnosticCenterDao;
import com.cg.healthcaresystem.diagnosticcenter.dao.ITestDao;
import com.cg.healthcaresystem.diagnosticcenter.entities.DiagnosticCenter;
import com.cg.healthcaresystem.diagnosticcenter.entities.Test;
import com.cg.healthcaresystem.diagnosticcenter.exceptions.CenterNotFoundException;
import com.cg.healthcaresystem.diagnosticcenter.exceptions.TestNotFoundException;
@Component
public class TestServiceImpl implements ITestService {
	
	@Autowired
	private ITestDao testDao;
	
	@Autowired
	private IDiagnosticCenterDao dao;
	
	
	@Override
	public Test addTest(Test test) {
		Optional<DiagnosticCenter> option= dao.findById(test.getCenterId());
		if(option.isPresent()) {
			DiagnosticCenter center=option.get();
			List<Test> list= center.getListOfTest();
			list.add(test);
			dao.save(center);
			 testDao.save(test);
			return test;
		}
		
		throw new CenterNotFoundException("center is found with testId");
	}

	@Override
	public boolean removeTest(Long testId) {
		Optional<Test> option=testDao.findById(testId);
		if(option.isPresent()) {
			Test test=option.get();
			Optional<DiagnosticCenter> center=dao.findById(test.getCenterId());
			DiagnosticCenter dc=center.get();
			List<Test> list=dc.getListOfTest();
			list.remove(test);
			testDao.deleteById(testId);
			return true;
		}
		throw new TestNotFoundException("test is not found with testID");
		
		
	}

	@Override
	public Test findTestById(Long testId) {
		Optional<Test> option=testDao.findById(testId);
		Test test=option.get();
		if(option.isPresent())
			return test;
		throw new TestNotFoundException("test is not found with this id");
	}

}
