package com.EWMS.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.EWMS.Entity.StorageBin;
import com.EWMS.Repository.StorageBinRepository;

@Service
public class StrorageBinService {
	
	@Autowired
	private StorageBinRepository storageBinRepository;
	
	//save
	public StorageBin saveStorageBin(StorageBin storageBin) {
		return storageBinRepository.save(storageBin);
	}
	
	//get all
	public List<StorageBin> getAllStorageBin(){
		return storageBinRepository.findAll();
	}
	
	//get by id
	
	public StorageBin getById(Long id) {
		return storageBinRepository.findById(id).orElse(null);
	}
	
	//delete

	public void deleteStorageBin(Long id) {
		storageBinRepository.deleteById(id);
	}
	
	//find available StorageBin
	
	public StorageBin findAvailableStorageBin(List<StorageBin> bins) {
		for(StorageBin bin: bins) {
			if(bin.getCapacity()>0) {
				return bin;
			}
		}
		
		return null;
	}

}
