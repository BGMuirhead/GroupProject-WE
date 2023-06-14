package com.trackfic.service;

import java.util.List;

import com.trackfic.dao.LocationDaoInterface;
import com.trackfic.model.Location;

public class LocationServiceImpl implements LocationServiceInterface {

	Location returnedLocation;

	LocationDaoInterface locationDao;

	public LocationServiceImpl(LocationDaoInterface locationDao) {
		this.locationDao = locationDao;
		this.returnedLocation = new Location();
	}

	public List<Location> getAllLocations() {
		return locationDao.getAllLocations();
	}

	public Location getLocationById(int id) {

		returnedLocation = locationDao.findLocationById(id);
		return returnedLocation;
	}

	public Location addNewLocation(Location location) {
		
		returnedLocation = locationDao.createNewLocation(location);
		return returnedLocation;
	}

	public Location updateLocationData(int id, Location location) {
		
		if(id!= location.getLocationId())
		{
			//throw an error 
		}
		
		locationDao.updateLocationType(location);
		
		return location;
	}

	public void deleteLocation(int id) {

		locationDao.deleteLocation(id);
	}

}
