package com.cg.healthcaresystem.diagnosticcenter.service;

import java.util.List;

import com.cg.healthcaresystem.diagnosticcenter.entities.DiagnosticCenter;

public interface IDiagnosticCenterService {

	public DiagnosticCenter addDiagnosticCenter(DiagnosticCenter center);

	public List<DiagnosticCenter> viewAllDiagnosticCenter();

	public DiagnosticCenter findDiagnosticCenterById(Long center);

	public boolean removeDiagnosticCenter(Long centerId);

	public DiagnosticCenter modifyCenter(DiagnosticCenter center);

}