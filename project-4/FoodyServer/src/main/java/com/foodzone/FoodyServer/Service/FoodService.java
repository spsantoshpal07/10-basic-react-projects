package com.foodzone.FoodyServer.Service;

import com.foodzone.FoodyServer.Entity.Food;
import com.foodzone.FoodyServer.Exception.EmployeeRuntimeException;

import java.io.IOException;
import java.util.List;

public interface FoodService {

    List<Food> getFoodItems();

    byte[] getImage(String imageUrl) throws EmployeeRuntimeException;
}
