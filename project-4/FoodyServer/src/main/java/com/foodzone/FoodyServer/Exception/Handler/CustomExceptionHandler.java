package com.foodzone.FoodyServer.Exception.Handler;

import com.foodzone.FoodyServer.Exception.EmployeeRuntimeException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.io.IOException;

@RestControllerAdvice
public class CustomExceptionHandler {

    @ExceptionHandler(EmployeeRuntimeException.class)
    public ResponseEntity<String> handleEmployeeRuntimeException(EmployeeRuntimeException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

}
