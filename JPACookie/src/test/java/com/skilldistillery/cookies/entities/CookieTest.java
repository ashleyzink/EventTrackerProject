package com.skilldistillery.cookies.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class CookieTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Cookie cookie;
	

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("CookiePU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		cookie = em.find(Cookie.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		cookie = null;
	}

	@Test
	@DisplayName("test Cookie entity mapping")
	void test() {
		assertNotNull(cookie);
		assertEquals("Oatmeal Scotchies", cookie.getName());
	}

}
