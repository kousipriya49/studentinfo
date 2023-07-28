package com.becoder.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.becoder.model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
}
