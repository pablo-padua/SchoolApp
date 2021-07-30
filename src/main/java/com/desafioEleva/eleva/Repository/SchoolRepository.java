package com.desafioEleva.eleva.Repository;

import com.desafioEleva.eleva.Entity.School;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SchoolRepository extends JpaRepository<School, Long> {

    Optional<School> findBySchoolCode(Long aLong);
}
