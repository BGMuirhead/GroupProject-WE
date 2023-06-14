package com.trackfic.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


@ResponseStatus(HttpStatus.NOT_FOUND)
public class AccidentNotFound extends RuntimeException {

	public AccidentNotFound(String message) {
		
		super(message);
	}
}

