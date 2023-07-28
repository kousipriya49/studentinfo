package com.becoder.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.becoder.model.Contact;
import com.becoder.repository.CRepo;


@Service
public class CService {
	@Autowired //extends another class
    CRepo stRepo; //reference variable
	
	public Contact saveDetails(Contact e) {
		return stRepo.save(e);
	}
	public List <Contact>getDetails()

{
		return stRepo.findAll();
		
}
	}