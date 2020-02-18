package com.codessquad.qna.user;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class UserController {
    private List<User> users = new ArrayList<>();

    @PostMapping("/users")
    public String createUser(User user) {
        System.out.println(user);
        users.add(user);
        return "redirect:/users";
    }

    @GetMapping("/users")
    public String getUserList(Model model) {
        model.addAttribute("users", users);
        return "user/list";
    }

    @GetMapping("/users/join")
    public String signInForm() {
        return "user/form";
    }

    @GetMapping("/users/{userIndex}")
    public String getUserProfile(@PathVariable int userIndex, Model model) {
        System.out.println(userIndex);
       User user = users.get(userIndex);
       model.addAttribute("user", user);
       return "user/profile";
    }
}