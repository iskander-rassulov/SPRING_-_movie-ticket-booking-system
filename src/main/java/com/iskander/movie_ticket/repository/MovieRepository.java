package com.iskander.movie_ticket.repository;

import com.iskander.movie_ticket.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {
}
