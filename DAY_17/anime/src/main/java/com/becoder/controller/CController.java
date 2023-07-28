package com.becoder.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.becoder.model.Contact;
import com.becoder.service.CService;



@CrossOrigin
@RestController

public class CController {

	@Autowired // extends another class

	CService stuService;

	@PostMapping("/post11")

	public Contact addInfo(@RequestBody Contact st) {

		return stuService.saveDetails(st);

	}

	@GetMapping("/showDetails")

	public List<Contact> fetchDetails()

	{

		return stuService.getDetails();

	}

	}