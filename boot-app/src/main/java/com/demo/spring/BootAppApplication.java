package com.demo.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class BootAppApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext ctx= SpringApplication.run(BootAppApplication.class, args);

		//WriterApp app=(WriterApp) ctx.getBean("writerApp");
		//app.printText("Hello boot app");

	}

}
