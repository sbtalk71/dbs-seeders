package com.demo.spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MyCodeRunner implements CommandLineRunner {
    @Autowired
    private WriterApp app;
    @Override
    public void run(String... args) throws Exception {

        app.printText("Hello boot app");
    }
}
