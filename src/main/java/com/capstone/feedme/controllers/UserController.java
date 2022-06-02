package com.capstone.feedme.controllers;

import com.capstone.feedme.models.User;
import com.capstone.feedme.repositories.UserRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("user")
public class UserController {

    private final UserRepository usersDao;

    public UserController(UserRepository usersDao) {
        this.usersDao = usersDao;
    }

    @GetMapping("/login")
    public String login(){
        return "users/login";
    }

    @GetMapping("/register")
    public String register(Model model){
        model.addAttribute("user", new User());
        return "users/register";
    }

    @GetMapping("/profile")
    public String profile(){
        return "profiles/index";
    }

    @GetMapping("/profile/edit")
    public String editProfile(){
        return "profiles/edit";
    }

    @GetMapping("/profile/create")
    public String createProfile(){
        return "";
    }

    @PostMapping("/delete")
    public String deleteUser(){
        return "";
    }

}