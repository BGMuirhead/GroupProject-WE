package com.trackfic.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.trackfic.model.Accident;
import com.trackfic.model.Witness;

@Controller
public class ThymeleafController {

//	@GetMapping(value = "/thyme")
//	public String getTemplate(RedirectAttributes redirectAttrs) {
//		System.out.println("Inside getTemplate");
//
//		Witness w = (Witness) redirectAttrs.getAttribute("witness");
//		return "thymetemplate";
//	}
	@GetMapping(value = "/thyme")
	public String getTemplate(ModelMap model, @ModelAttribute("witness") Object witness, @ModelAttribute("accidents") List<Accident> accidents) {

		Witness w = (Witness) witness;
		model.addAttribute("witness" , witness);
		model.addAttribute("accidents" , accidents);
		return "thymetemplate";
	}
}
