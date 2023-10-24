package com.demo.spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class WriterApp {
    //@Autowired
    private Writer writer;

    @Autowired
    @Qualifier("beanB")
    public void setWriter(Writer writer) {
        this.writer = writer;
    }

    public void printText(String text){
        writer.write(text);
    }
}
