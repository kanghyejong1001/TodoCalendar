package com.example.oneNine;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class OneNineApplication {

	public static void main(String[] args) {
		SpringApplication.run(OneNineApplication.class, args);
	}

//	@SpringBootApplication
//	public class RestServiceCorsApplication {
//
//		public static void main(String[] args) {
//			SpringApplication.run(RestServiceCorsApplication.class, args);
//		}
//
//		@Bean
//		public WebMvcConfigurer corsConfigurer() {
//			return new WebMvcConfigurer() {
//				@Override
//				public void addCorsMappings(CorsRegistry registry) {
//					registry.addMapping("/**").allowedOrigins("http://front-server.com");
//				}
//			};
//		}
//	}
}
