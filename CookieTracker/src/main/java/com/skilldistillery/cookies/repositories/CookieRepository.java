package com.skilldistillery.cookies.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.cookies.entities.Cookie;

public interface CookieRepository extends JpaRepository<Cookie, Integer> {
	
	List<Cookie> findByNameLikeOrDescriptionLike(String keyword1, String keyword2);

}
