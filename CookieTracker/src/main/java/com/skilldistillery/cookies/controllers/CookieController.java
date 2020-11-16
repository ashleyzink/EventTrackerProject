package com.skilldistillery.cookies.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.cookies.entities.Cookie;
import com.skilldistillery.cookies.services.CookieService;

@RequestMapping("api")
@RestController
public class CookieController {

	@Autowired
	private CookieService svc;
	
	@GetMapping("cookies")
	public List<Cookie> listCookies() {
		return svc.getAllCookies();
		
	}
	@GetMapping("cookies/{id}")
	public Cookie show(
			@PathVariable("id") Integer id,
			HttpServletResponse response
	) {
		Cookie cookie = svc.findById(id);
		if (cookie == null) {
			response.setStatus(404);
		}
		return cookie;
 	}
	
	@PostMapping("cookies")
	public Cookie createCookie(
			@RequestBody Cookie cookie,
			HttpServletRequest request,
			HttpServletResponse response
	) {
		try {
			cookie = svc.createCookie(cookie);
			response.setStatus(201);
			StringBuffer url = request.getRequestURL();
//			url.append("/").append(cookie.getId()); //The append("/") is adding an extra / to the URL 
			url.append(cookie.getId());
			String urlstr = url.toString();
			response.setHeader("Location", urlstr);
		} catch (Exception e) {
			response.setStatus(400);
			cookie = null;
		}
		return cookie;
	}
	
	@PutMapping("cookies/{id}")
	public Cookie replaceCookie(
			@PathVariable Integer id, 
			@RequestBody Cookie cookie,
			HttpServletResponse response) 
	{
		try {
			cookie = svc.updateCookie(id, cookie);
			if (cookie == null) {
				response.setStatus(404);
			}
		} catch (Exception e) {
			response.setStatus(400);
			cookie = null;
		}
		return cookie;
	}
	
	@DeleteMapping("cookies/{id}")
	public void delete(
			@PathVariable Integer id,
			HttpServletResponse response
	) 
	{
		try {
			boolean deleted = svc.deleteCookie(id);
			if (deleted) {
				response.setStatus(204);
			}
			else {
				response.setStatus(404);			
			}
		} catch (Exception e) {
			response.setStatus(400);			
		}
	}
	
	@GetMapping("cookies/search/{keyword}")
	public List<Cookie> getCookieByKeyword(@PathVariable String keyword) {
		return svc.getCookiesByKeyword(keyword);
	}
}
