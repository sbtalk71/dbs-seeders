package com.demo.spring.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {


    @RequestMapping(path = "/login", method = RequestMethod.GET)
    public String login() {
        return "login";
    }

    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public ModelAndView handleLoginSubmit(@RequestParam("email") String email, @RequestParam("password") String password) {

        ModelAndView mv = new ModelAndView();
        if (email.equals(password)) {
            mv.addObject("userEmail", email);
            mv.setViewName("success");
        } else {
            mv.setViewName("failure̥");
        }
        return mv;
    }

    @RequestMapping(path="/greet",method = RequestMethod.GET)
    @ResponseBody
    public String greet(){
        return "Hello from MVC App";
    }
}
