package com.EWMS.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EWMS.Entity.StorageBin;
import com.EWMS.Repository.StorageBinRepository;

@RestController
@RequestMapping("/api/storagebins")
public class StorageBinController {
	
	
	@Autowired
	private StorageBinRepository storageBinRepository;
	
	//Create
	@PostMapping 
	public StorageBin create(@RequestBody StorageBin storageBin) {
		return storageBinRepository.save(storageBin);
	}
	
	//Get All
	
	@GetMapping
	public List<StorageBin> getAll(){
		return storageBinRepository.findAll();
	}
	
	//Get by id
	
	@GetMapping("/{id}")
	public StorageBin getById(@PathVariable Long id) {
		return storageBinRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Storage Bin not found by id:" +id));
	}
	
	//Update
	
	 @PutMapping("/{id}")
	    public StorageBin update(@PathVariable Long id,
	                             @RequestBody StorageBin updated) {

	        StorageBin storageBin = storageBinRepository.findById(id)
	                .orElseThrow(() ->
	                        new RuntimeException("Storage Bin not found with id: " + id));

	        storageBin.setBinCode(updated.getBinCode());
	        storageBin.setCapacity(updated.getCapacity());

	        return storageBinRepository.save(storageBin);
	    }

	    // Delete
	    @DeleteMapping("/{id}")
	  
	    public void delete(@PathVariable Long id) {
	   
	         storageBinRepository.deleteById(id);

	   
	     }
	
	
	

}
