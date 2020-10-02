package store.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import store.web.constant.View;
import store.web.service.UserService;


@Controller
public class HomeController {

    private final UserService userService;

    @Autowired
    public HomeController(UserService userService){
        this.userService=userService;
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String getHomePage(Model model) {
        System.out.println(userService.getAll());
        model.addAttribute("message", "Spring Boot application that uses JSP With Embedded Tomcat");
        return View.HOME.getPath();
    }

}
