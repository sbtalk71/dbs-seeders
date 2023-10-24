package com.demo.spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Service;

@Service
@PropertySource("application.properties")
public class WriterApp {
    //@Autowired
    private Writer writer;


    @Value("${message}")
    private String msg;
    @Autowired
    @Qualifier("beanB")
    public void setWriter(Writer writer) {
        this.writer = writer;
    }

    public void printText(String text){
        writer.write(text+" "+msg);
    }
}
