package com.becoder.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.becoder.model.Feedback;
import com.becoder.service.FeedbackService;



@RestController
public class FeedbackController {
    @Autowired
    private FeedbackService feedbackService;

    @PostMapping("/feedback")
    public ResponseEntity<?> saveFeedback(@Valid @RequestBody Feedback feedback) {
        try {
            // Perform any additional validation if needed
            if (feedback.getName() == null || feedback.getEmail() == null || feedback.getMessage() == null) {
                return ResponseEntity.badRequest().body("Please provide all required fields.");
            }

            // Save the feedback
            Feedback savedFeedback = feedbackService.saveFeedback(feedback);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedFeedback);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to submit feedback. Please try again later.");
        }
    }
}
