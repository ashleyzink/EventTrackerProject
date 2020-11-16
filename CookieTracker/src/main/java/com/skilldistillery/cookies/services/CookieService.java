package com.skilldistillery.cookies.services;

import java.util.List;

import com.skilldistillery.cookies.entities.Cookie;

public interface CookieService {
	
	List<Cookie> getAllCookies();
	
	Cookie findById(int id);
	
	Cookie createCookie(Cookie cookie);
	
	Cookie updateCookie(int id, Cookie cookie);
	
	boolean deleteCookie(int id);
	
	List<Cookie> getCookiesByKeyword(String keyword);

}
