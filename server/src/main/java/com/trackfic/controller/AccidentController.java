package com.trackfic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trackfic.service.AccidentServiceImpl;

@RestController
@RequestMapping("/accident")
public class AccidentController {
	
	@Autowired
	AccidentServiceImpl accidentService;
	
//	@GetMapping("/accidents")
	

}
