package com.capstone.feedme.controllers;

import org.springframework.web.bind.annotation.RequestMapping;

public class AboutController {

    @RequestMapping("/about")
    public String showAboutPage(){
        return "/about/index";
    }
}
