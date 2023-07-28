package com.foodzone.FoodyServer.Entity;

public class Food {

    public String name;
    public int price;
    public String text;
    public String imageUrl;
    public String type;

    public Food(String name, int price, String text, String imageUrl, String type) {
        this.name = name;
        this.price = price;
        this.text = text;
        this.imageUrl = imageUrl;
        this.type = type;
    }
}
