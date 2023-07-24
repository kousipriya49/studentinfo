package com.becoder.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.becoder.model.RModel;
import com.becoder.repository.Repo;
     @Service
public class Rservice {
   @Autowired
   Repo repo;
   public void booking(RModel mod) {
	   repo.save(mod.getFirstname(),mod.getEmail(),mod.getLastname(),mod.getAddress(),mod.getPhoneno(),mod.getCollege());
   }
   public List<RModel> getdet()
   {
	   return repo.findAll();
   }
   public RModel updatedetails(RModel st2)
	{
		return repo.saveAndFlush(st2);
	}
	
	public void deleteDetails(String sid)
	{
		repo.delete(sid);

	}
  
}
