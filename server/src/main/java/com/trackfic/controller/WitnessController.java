package com.trackfic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trackfic.exception.WitnessNotFoundException;
import com.trackfic.model.Witness;
import com.trackfic.service.WitnessServiceImpl;

@RestController
@RequestMapping("/witness")
@CrossOrigin
public class WitnessController {

	@Autowired
	WitnessServiceImpl witnessService;

	
//	Currently unimplemented in front end so hiding end point	
//	
//	@GetMapping("/witnesses")
//	public List<Witness> getAllWitnesses() {
//
//		List<Witness> witness = witnessService.getAllWitnesses();
//		return witness;
//	}
	
	@GetMapping("/{email}")
	public Witness getWitnessById(@PathVariable String email)
	{
		Witness witness = witnessService.getWitnessByEmail(email);
		return witness;
	}
	
	@PostMapping("/add")
	public Witness addWitness(@RequestBody Witness witness)
	{
		Witness witness1 = witnessService.addNewWitness(witness);
		return witness1;
	}
	
	
	@PutMapping("{email}")
	public Witness updateWitness(@PathVariable String email, @RequestBody Witness witness)
	{
		Witness witness1 = witnessService.updateWitnessData(email, witness);
		return witness1;
		
	}
	
	@DeleteMapping("/{email}")
	public void deleteWitness(@PathVariable String email)
	{
		witnessService.deleteWitness(email);
		
	}
}
