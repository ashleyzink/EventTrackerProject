package com.skilldistillery.cookies.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.cookies.entities.Cookie;

public interface CookieRepository extends JpaRepository<Cookie, Integer> {

}
