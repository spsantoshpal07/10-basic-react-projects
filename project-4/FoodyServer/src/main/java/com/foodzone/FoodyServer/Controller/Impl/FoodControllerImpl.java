package com.foodzone.FoodyServer.Controller.Impl;

import com.foodzone.FoodyServer.Controller.FoodController;
import com.foodzone.FoodyServer.Entity.Food;
import com.foodzone.FoodyServer.Exception.EmployeeRuntimeException;
import com.foodzone.FoodyServer.Service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping(value = "/food")
public class FoodControllerImpl implements FoodController {

    @Autowired
    private FoodService foodService;

    @Override
    @GetMapping(value = "/getFoodItems", produces = "application/json")
    public List<Food> getFoodItems() {
        return foodService.getFoodItems();
    }

    @GetMapping(value = "/images/{imageUrl}", produces = MediaType.IMAGE_PNG_VALUE)
    public ResponseEntity<byte[]> getImage(@PathVariable(name = "imageUrl") String imageUrl) throws EmployeeRuntimeException {
        System.out.println(imageUrl);
        MultiValueMap<String, String> contentType = new LinkedMultiValueMap<>();
        contentType.put(HttpHeaders.CONTENT_TYPE, Collections.singletonList(MediaType.IMAGE_PNG_VALUE));
        byte[] bytes = foodService.getImage(imageUrl);
        return new ResponseEntity<>(bytes, contentType, HttpStatus.OK);
    }
}
