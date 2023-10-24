package com.demo.spring;

public class ResponseData {

    private String message;

    public ResponseData(String msg){
        this.message=msg;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
