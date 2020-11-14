package com.skilldistillery.cookies.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.cookies.entities.Cookie;
import com.skilldistillery.cookies.repositories.CookieRepository;

@Service
public class CookieServiceImpl implements CookieService {

	@Autowired
	private CookieRepository repo;
	
	@Override
	public List<Cookie> getAllCookies() {
		return null;
	}

}
