package com.skilldistillery.cookies.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.cookies.services.CookieService;

@RequestMapping("api")
@RestController
public class CookieController {

	@Autowired
	private CookieService svc;
	
	@GetMapping("ping")
	public String ping() {
		return "pong!";
	}
}
