package com.skilldistillery.cookies.services;

import java.util.List;
import java.util.Optional;

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
		return repo.findAll();
	}

	@Override
	public Cookie findById(int id) {
		Optional<Cookie> cookieOpt = repo.findById(id);
		return cookieOpt.get();
	}

	@Override
	public Cookie createCookie(Cookie cookie) {
		repo.saveAndFlush(cookie);
		return cookie;
	}

	@Override
	public Cookie updateCookie(int id, Cookie cookie) {
		Optional<Cookie> cookieOpt = repo.findById(id);
		Cookie managedCookie = null;
		if(cookieOpt.isPresent()) {
			managedCookie = cookieOpt.get();
			if (cookie.getName() != null) {managedCookie.setName(cookie.getName());}
			if (cookie.getDescription() != null) {managedCookie.setDescription(cookie.getDescription());}
			if (cookie.getIngredientList() != null) {managedCookie.setIngredientList(cookie.getIngredientList());}
			if (cookie.getInstructions() != null) {managedCookie.setInstructions(cookie.getInstructions());}
			if (cookie.getPrepTimeMinutes() != null) {managedCookie.setPrepTimeMinutes(cookie.getPrepTimeMinutes());}
			if (cookie.getBakeTimeMinutes() != null) {managedCookie.setBakeTimeMinutes(cookie.getBakeTimeMinutes());}
			if (cookie.getYield() != null) {managedCookie.setYield(cookie.getYield());}
			if (cookie.getTexture() != null) {managedCookie.setTexture(cookie.getTexture());}
			if (cookie.getComment() != null) {managedCookie.setComment(cookie.getComment());}
			if (cookie.getSource() != null) {managedCookie.setSource(cookie.getSource());}
			if (cookie.getImageURL() != null) {managedCookie.setImageURL(cookie.getImageURL());}
			repo.saveAndFlush(managedCookie);
 		}
		
		return managedCookie;
	}

	@Override
	public boolean deleteCookie(int id) {
		boolean deleted = false;
		Optional<Cookie> cookieOpt = repo.findById(id);
		if(cookieOpt.isPresent()) {
			Cookie cookie = cookieOpt.get();
			repo.delete(cookie);
			deleted = true;
		}
		return deleted;
	}

	@Override
	public List<Cookie> getCookiesByKeyword(String keyword) {
			keyword = "%" + keyword + "%";
			return repo.findByNameLikeOrDescriptionLike(keyword, keyword);
	}

}
