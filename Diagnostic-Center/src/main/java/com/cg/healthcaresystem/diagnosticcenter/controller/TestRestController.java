package com.cg.healthcaresystem.diagnosticcenter.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.healthcaresystem.diagnosticcenter.dto.CenterDetailsDto;
import com.cg.healthcaresystem.diagnosticcenter.dto.CenterDto;
import com.cg.healthcaresystem.diagnosticcenter.dto.TestDto;
import com.cg.healthcaresystem.diagnosticcenter.entities.DiagnosticCenter;
import com.cg.healthcaresystem.diagnosticcenter.entities.Test;
import com.cg.healthcaresystem.diagnosticcenter.service.ITestService;

@RestController
@RequestMapping("/test")
@Validated
@CrossOrigin(origins="*")	
public class TestRestController {
	
	private static final Logger Log = LoggerFactory.getLogger(DiagnosticCenterRestController.class);
		
	@Autowired
	private ITestService service;
	
	@PostMapping("/addTest")
	ResponseEntity<Test> add(@Valid @RequestBody Test req) {
		Test test=service.addTest(req);
		ResponseEntity<Test> response = new ResponseEntity<>(test, HttpStatus.OK);
		return response;

	}
	
	@DeleteMapping("/delete/{testId}")
	ResponseEntity<Boolean> delete(@PathVariable("testId") Long testId) {
		boolean result = service.removeTest(testId);
		ResponseEntity<Boolean> response = new ResponseEntity<>(result, HttpStatus.OK);
		return response;
	
	
	}
	
	@GetMapping("/get/{testId}")
	ResponseEntity<Test> getById(@PathVariable("testId") Long testId) {
		Test test = service.findTestById(testId);
		ResponseEntity<Test> response = new ResponseEntity<>(test, HttpStatus.OK);
		return response;

	}
	
}
	
	
	

