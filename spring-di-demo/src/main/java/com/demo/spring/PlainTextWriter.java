package com.demo.spring;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component("beanA")
public class PlainTextWriter implements Writer{
    @Override
    public void write(String text) {
        System.out.println("Plain Text Writer : "+text);
    }
}
