package com.foodzone.FoodyServer.Service.Impl;

import com.foodzone.FoodyServer.Entity.Food;
import com.foodzone.FoodyServer.Exception.EmployeeRuntimeException;
import com.foodzone.FoodyServer.Service.FoodService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.logging.log4j.Logger;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class FoodServiceImpl implements FoodService {

    private static Log LOGGER = LogFactory.getLog(FoodServiceImpl.class);

    @Override
    public List<Food> getFoodItems() {
        System.out.println("Get Food Items -->");

        List<Food> foodItems = new ArrayList<>();

        foodItems.add(new Food("Boiled Egg",
                10,
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                "egg.png",
                "breakfast"));

        foodItems.add(new Food("RAMEN",
                25,
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                "ramen.png",
                "lunch"));

        foodItems.add(new Food("GRILLED CHICKEN",
                45,
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                "chicken.png",
                "dinner"));

        foodItems.add(new Food("CAKE",
                18,
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                "cake.png",
                "breakfast"));

        foodItems.add(new Food("BURGER",
                23,
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                "burger.png",
                "lunch"));

        foodItems.add(new Food("PANCAKE",
                25,
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                "pancake.png",
                "dinner"));

        return foodItems;
    }

    public byte[] getImage(String imageUrl) throws EmployeeRuntimeException {
        System.out.println("Get Image Service -->");
        System.out.println(imageUrl);
        var imageFile = new ClassPathResource("/images/" + imageUrl);
        byte[] bytes = null;
        try {
            bytes = StreamUtils.copyToByteArray(imageFile.getInputStream());
        } catch (IOException e) {
            throw new EmployeeRuntimeException("image not found");
        }

        return bytes;
    }
}
