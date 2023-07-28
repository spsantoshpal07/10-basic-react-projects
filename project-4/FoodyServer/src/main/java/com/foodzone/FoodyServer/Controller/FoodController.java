package com.foodzone.FoodyServer.Controller;

import com.foodzone.FoodyServer.Entity.Food;
import com.foodzone.FoodyServer.Exception.EmployeeRuntimeException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface FoodController {

    List<Food> getFoodItems();

    ResponseEntity<byte[]> getImage(String imageUrl) throws EmployeeRuntimeException;
}
