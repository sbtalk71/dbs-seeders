package com.demo.spring;

import org.springframework.stereotype.Component;

@Component("beanB")
public class DecoratedTextWriter implements Writer{
    @Override
    public void write(String text) {
        System.out.println("Decorated Text Writer : "+text);
    }
}
