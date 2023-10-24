package com.demo.spring.security;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;


@Component
public class CustomUserDetailsService implements UserDetailsService {



	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		return new org.springframework.security.core.userdetails.User("root", "welcome1",
				new ArrayList<>());
	}

}
