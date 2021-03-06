package com.cg.healthcaresystem.diagnosticcenter.service;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cg.healthcaresystem.diagnosticcenter.dao.IDiagnosticCenterDao;
import com.cg.healthcaresystem.diagnosticcenter.entities.DiagnosticCenter;
import com.cg.healthcaresystem.diagnosticcenter.exceptions.CenterAlreadyExitsException;
import com.cg.healthcaresystem.diagnosticcenter.exceptions.CenterNotFoundException;
import com.cg.healthcaresystem.diagnosticcenter.util.CenterValidation;
/**
 * 
 * @author krishna 
 *
 */
@Service
@Transactional
public class DignosticCenterServiceImpl implements IDiagnosticCenterService {
	private IDiagnosticCenterDao dao;

	public IDiagnosticCenterDao getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IDiagnosticCenterDao dao) {
		this.dao = dao;
	}
	
	private CenterValidation centerValidation;

	public CenterValidation getCenterValidation() {
		return getCenterValidation();
	}

	@Autowired
	public void setCenterValidation(CenterValidation centerValidation) {
		this.centerValidation = centerValidation;
	}
	
	
	
	

	@Override
	public DiagnosticCenter addDiagnosticCenter(DiagnosticCenter center) {
		BigInteger number=center.getContactNumber();
		boolean bln=centerValidation.contactNumberValidations(number);
		if(bln) {
		return dao.save(center);
		}

			throw new  CenterNotFoundException("mobile no. is not valid");

	}
/**
 * to view all the centers
 * @retun list of centers
 */
	@Override
	public List<DiagnosticCenter> viewAllDiagnosticCenter() {
		List<DiagnosticCenter> centerList = dao.findAll();
		return centerList;
	}
	
	/**
	 * @param centerId
	 * @return true/false
	 * 
	 */

	@Override
	public boolean removeDiagnosticCenter(Long centerId) {
		Optional<DiagnosticCenter> optional = dao.findById(centerId);
		if (optional.isPresent()) {
			DiagnosticCenter center = optional.get();
			dao.delete(center);
			return true;
		}

		throw new CenterNotFoundException("No center with given details" + centerId);
	}
/**
 * @param center reference
 * @return modified center
 */
	@Override
	public DiagnosticCenter modifyCenter(DiagnosticCenter center) {
		return dao.save(center);
	}
	
/**
 * @param centerId
 * @return matched centerId with its center details
 */
	@Override
	public DiagnosticCenter findDiagnosticCenterById(Long centerId) {
		Optional<DiagnosticCenter> optional = dao.findById(centerId);
		if (optional.isPresent()) {
			DiagnosticCenter center = optional.get();
			return center;
		}
		throw new CenterNotFoundException("no center" + centerId);
	}

}