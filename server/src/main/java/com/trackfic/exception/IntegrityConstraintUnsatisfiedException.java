package com.trackfic.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class IntegrityConstraintUnsatisfiedException extends RuntimeException {

	public IntegrityConstraintUnsatisfiedException(String message) {

		super(message);
	}
}
